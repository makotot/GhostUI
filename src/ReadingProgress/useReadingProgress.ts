import { useCallback, useEffect, useRef, useState } from 'react';
import { HookProps } from './type';
import { percentage, optimization } from '../utils';

export const useReadingProgress = (props?: HookProps) => {
  const getEl = useCallback(() => {
    const target = props?.targetEl
      ? document.querySelector(props.targetEl)
      : document.body;
    const root = props?.rootEl ? document.querySelector(props.rootEl) : window;

    return {
      target,
      root,
    };
  }, [props?.targetEl, props?.rootEl]);
  const el = useRef<{
    target: Element | HTMLElement | null;
    root: Element | HTMLElement | (Window & typeof globalThis) | null;
  }>();

  useEffect(() => {
    el.current = getEl();
  }, [getEl]);

  const measureViewportHeight = useCallback(() => {
    return props?.rootEl
      ? (el.current?.root as HTMLElement).clientHeight
      : Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
  }, [props?.rootEl, el.current?.root]);

  const maxRef = useRef(0);
  const measure = useCallback(() => {
    const targetHeight =
      el.current?.target?.getBoundingClientRect().height || 0;
    const viewportHeight = measureViewportHeight();
    maxRef.current = Math.round(targetHeight - viewportHeight);
  }, [measureViewportHeight]);

  const [value, updateValue] = useState(0);
  const update = useCallback(() => {
    const value = props?.rootEl
      ? (el.current?.root as HTMLElement).scrollTop
      : window.pageYOffset || document.documentElement.scrollTop;

    updateValue(value);
  }, [el.current?.root, props?.rootEl]);

  const handleResize = useCallback(
    optimization.debounce(() => {
      measure();
    }),
    [measure]
  );

  const handleScroll = useCallback(
    optimization.debounce(() => {
      update();
    }),
    [update]
  );

  useEffect(() => {
    if (el.current?.root) {
      el.current.root.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('resize', handleResize);
    measure();

    return () => {
      if (el.current?.root) {
        el.current.root.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll, handleResize, measure]);

  return {
    value,
    max: maxRef.current,
    percentageOfValue: percentage.calc({ value, total: maxRef.current }),
  };
};
