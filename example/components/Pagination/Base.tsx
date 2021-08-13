import * as React from 'react';
import { useState } from 'react';
import { Pagination } from '../../../src';

export const Base: React.FC<{
  currentPage?: number;
  totalPage?: number;
  middlePagesSiblingCount?: number;
  edgePageCount?: number;
}> = ({
  currentPage = 1,
  totalPage = 10,
  middlePagesSiblingCount,
  edgePageCount,
}) => {
  const [currentPageState, updateCurrentPage] = useState(currentPage);
  const handleChangeCurrentPage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const page = (e.currentTarget as HTMLElement).dataset.page;
    updateCurrentPage(Number(page));
  };
  return (
    <Pagination
      currentPage={currentPageState}
      totalPage={totalPage}
      middlePagesSiblingCount={middlePagesSiblingCount}
      edgePageCount={edgePageCount}
    >
      {props => (
        <div>
          <div>
            currentpage: <div id="currentPage">{props.currentPage}</div>
            totalpage: <div id="totalPage">{props.totalPage}</div>
          </div>
          <div
            style={{
              display: 'grid',
              gridAutoFlow: 'column',
            }}
          >
            {props.hasPreviousPage() && (
              <a
                href="#prev"
                id="hasPrev"
                data-page={props.currentPage - 1}
                onClick={handleChangeCurrentPage}
              >
                prev
              </a>
            )}
            {props.getPreviousPages().map(boundary => {
              return (
                <span key={boundary} className="firstBoundary">
                  {boundary}
                </span>
              );
            })}
            {props.isPreviousTruncable() && <div id="isPrevTruncated">...</div>}
            <div>
              {props.getMiddlePages().map(page => {
                return page === props.currentPage ? (
                  <span
                    key={page}
                    style={{
                      fontWeight: 'bold',
                      fontSize: '120%',
                    }}
                    className="pageItems"
                  >
                    {page}
                  </span>
                ) : (
                  <a
                    href="#page"
                    key={page}
                    className="pageItems"
                    data-page={page}
                    onClick={handleChangeCurrentPage}
                  >
                    {page}
                  </a>
                );
              })}
            </div>
            {props.isNextTruncable() && <div id="isNextTruncated">...</div>}
            {props.getNextPages().map(boundary => {
              return (
                <span key={boundary} className="lastBoundary">
                  {boundary}
                </span>
              );
            })}
            {props.hasNextPage() && (
              <a
                href="#next"
                id="hasNext"
                data-page={props.currentPage + 1}
                onClick={handleChangeCurrentPage}
              >
                next
              </a>
            )}
          </div>
        </div>
      )}
    </Pagination>
  );
};
