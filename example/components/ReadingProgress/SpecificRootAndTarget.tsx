import * as React from 'react';
import { ReadingProgress } from '../../../src';
import { LoremIpsum } from './LoremIpsum';

export const SpecificRootAndTarget = () => {
  return (
    <div>
      <ReadingProgress rootEl="#article-wrapper" targetEl="#article-section">
        {({ percentageOfValue }) => (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
            }}
          >
            <progress
              id="reading-progress"
              value={percentageOfValue}
              max={100}
            />
          </div>
        )}
      </ReadingProgress>
      <h1>reading progress</h1>
      <div
        id="article-wrapper"
        style={{
          height: '300px',
          overflowX: 'hidden',
          overflowY: 'auto',
        }}
      >
        <div id="article-section">
          <LoremIpsum />
        </div>
      </div>
    </div>
  );
};
