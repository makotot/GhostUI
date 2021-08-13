import { TEST_ID } from './config';

describe('Pagination', () => {
  describe('Current page: 1 / Total page: 1', () => {
    beforeEach(() => {
      cy.visit('/pagination/currentpage-1-totalpage-1');
    });
    it('renders current page as 1', () => {
      cy.get(TEST_ID.CURRENT_PAGE).should('have.text', 1);
    });
    it('renders total page as 1', () => {
      cy.get(TEST_ID.TOTAL_PAGE).should('have.text', 1);
    });
    it('renders 1 page item', () => {
      cy.get(TEST_ID.PAGE_ITEMS).should('have.length', 1);
    });
    it('does not render prev link', () => {
      cy.get(TEST_ID.HAS_PREV).should('not.exist');
    });
    it('does not render next link', () => {
      cy.get(TEST_ID.HAS_NEXT).should('not.exist');
    });
    it('does not render first boundary', () => {
      cy.get(TEST_ID.FIRST_BOUNDARY).should('not.exist');
    });
    it('does not render last boundary', () => {
      cy.get(TEST_ID.LAST_BOUNDARY).should('not.exist');
    });
    it('does not render prev truncated', () => {
      cy.get(TEST_ID.IS_PREV_TRUNCATED).should('not.exist');
    });
    it('does not render next truncated', () => {
      cy.get(TEST_ID.IS_NEXT_TRUNCATED).should('not.exist');
    });
  });
});
