import * as React from 'react';
import { useRef } from 'react';
import { Scrollspy } from '../../../src';
import { Main } from './Main';

export const Offset = () => {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '100px',
          backgroundColor: '#fff',
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      ></div>
      <Scrollspy sectionRefs={sectionRefs} offset={-100}>
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
