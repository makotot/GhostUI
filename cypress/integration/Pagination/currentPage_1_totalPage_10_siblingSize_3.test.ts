import { TEST_ID } from './config';

describe('Pagination', () => {
  describe('Current page: 1 / Total page: 10 / Sibling size: 3', () => {
    beforeEach(() => {
      cy.visit('/pagination/currentpage-1-totalpage-10-siblingsize-3');
    });
    it('renders current page as 1', () => {
      cy.get(TEST_ID.CURRENT_PAGE).should('have.text', 1);
    });
    it('renders total page as 10', () => {
      cy.get(TEST_ID.TOTAL_PAGE).should('have.text', 10);
    });
    it('renders 7 page items', () => {
      cy.get(TEST_ID.PAGE_ITEMS).should('have.length', 7);
    });
    it('does not render prev link', () => {
      cy.get(TEST_ID.HAS_PREV).should('not.exist');
    });
    it('render next link', () => {
      cy.get(TEST_ID.HAS_NEXT).should('exist');
    });
    it('does not render first boundary', () => {
      cy.get(TEST_ID.FIRST_BOUNDARY).should('not.exist');
    });
    it('render last boundary', () => {
      cy.get(TEST_ID.LAST_BOUNDARY).should('have.length', 2);
    });
    it('does not render prev truncated', () => {
      cy.get(TEST_ID.IS_PREV_TRUNCATED).should('not.exist');
    });
    it('render next truncated', () => {
      cy.get(TEST_ID.IS_NEXT_TRUNCATED).should('exist');
    });
  });
});
