import * as React from 'react';
import { useRef } from 'react';
import { Scrollspy } from '../../../src';
import { Main } from './Main';

export const SpecificRoot = () => {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <div
      id="specific-root"
      style={{
        height: '500px',
        overflow: 'scroll',
      }}
    >
      <Scrollspy sectionRefs={sectionRefs} rootSelector="#specific-root">
        {({ currentElementIndexInViewport }) => (
          <Main
            currentElementIndexInViewport={currentElementIndexInViewport}
            sectionRefs={sectionRefs}
          />
        )}
      </Scrollspy>
    </div>
  );
};
