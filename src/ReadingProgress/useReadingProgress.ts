import { useCallback, useEffect, useRef, useState } from 'react';
import { HookProps } from './type';
import { percentage } from '../utils/percentage';

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
  const el = getEl();
  const measureViewportHeight = useCallback(() => {
    return !props?.rootEl
      ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      : (el.root as HTMLElement).clientHeight;
  }, [props?.rootEl, el.root]);
  const maxRef = useRef(0);
  const measure = useCallback(() => {
    const targetHeight = el?.target?.getBoundingClientRect().height || 0;
    const viewportHeight = measureViewportHeight();
    maxRef.current =
      targetHeight - viewportHeight + (el.target as HTMLElement).offsetTop;
    return {
      targetHeight,
      viewportHeight,
    };
  }, [el.target, measureViewportHeight]);
  const [value, updateValue] = useState(0);
  const update = useCallback(() => {
    const value = !props?.rootEl
      ? window.pageYOffset || document.documentElement.scrollTop
      : (el.root as HTMLElement).scrollTop;

    updateValue(value);
  }, [el.root, props?.rootEl]);
  const handleResize = useCallback(() => {
    measure();
  }, [measure]);

  const handleScroll = useCallback(() => {
    update();
  }, [update]);

  useEffect(() => {
    if (el.root) {
      el.root.addEventListener('scroll', handleScroll);
    }
    window.addEventListener('resize', handleResize);
    measure();

    return () => {
      if (el.root) {
        el.root.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [el.root, handleScroll, handleResize]);

  return {
    value,
    max: maxRef.current,
    percentageOfValue: percentage.calc({ value, total: maxRef.current }),
  };
};
