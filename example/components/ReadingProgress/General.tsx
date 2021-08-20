import * as React from 'react';
import { ReadingProgress } from '../../../src';
import { LoremIpsum } from './LoremIpsum';

export const General = () => {
  return (
    <div>
      <ReadingProgress>
        {({ value }) => (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
            }}
          >
            <progress id="reading-progress" value={value} max={100} />
          </div>
        )}
      </ReadingProgress>
      <h1>reading progress</h1>
      <LoremIpsum />
    </div>
  );
};
