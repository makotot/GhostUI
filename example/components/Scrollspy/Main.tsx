import * as React from 'react';

const SIZE = 5;
const list = new Array(SIZE).fill(0);

export const Main = ({
  currentElementIndexInViewport,
  sectionRefs,
}: {
  currentElementIndexInViewport: number;
  sectionRefs: React.RefObject<HTMLDivElement>[];
}) => {
  return (
    <div>
      <ul
        data-cy="nav-wrapper"
        style={{
          listStyle: 'none',
          position: 'fixed',
          top: 0,
          right: 0,
          backgroundColor: '#fff',
          padding: '1rem',
        }}
      >
        {list.map((_, i) => (
          <li
            key={i}
            className={currentElementIndexInViewport === i ? 'active' : ''}
            data-cy={`nav-item`}
          >
            <a
              href={`#section-${i}`}
              style={{
                color: currentElementIndexInViewport === i ? '#f00' : '#222',
              }}
            >
              section-{i}
            </a>
          </li>
        ))}
      </ul>
      <div data-cy="section-wrapper">
        {list.map((_, i) => (
          <div
            id={`section-${i}`}
            data-cy={`section-item`}
            key={i}
            ref={sectionRefs[i]}
            className={currentElementIndexInViewport === i ? 'active' : ''}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '500px',
              backgroundColor: `#${i}${i}${i}`,
              color: '#fff',
              fontSize: '2rem',
            }}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};
