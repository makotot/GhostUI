import * as React from 'react';
import { useRef } from 'react';
import { Scrollspy } from '../../../src';
import { Main } from './Main';

export const General = () => {
  const sectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  return (
    <div>
      <Scrollspy sectionRefs={sectionRefs}>
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
