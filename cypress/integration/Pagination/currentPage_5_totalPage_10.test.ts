import { TEST_ID } from './config';

describe('Pagination', () => {
  describe('Current page: 5 / Total page: 10', () => {
    beforeEach(() => {
      cy.visit('/pagination/currentpage-5-totalpage-10');
    });
    it('renders current page as 5', () => {
      cy.get(TEST_ID.CURRENT_PAGE).should('have.text', 5);
    });
    it('renders total page as 10', () => {
      cy.get(TEST_ID.TOTAL_PAGE).should('have.text', 10);
    });
    it('renders 5 page items', () => {
      cy.get(TEST_ID.PAGE_ITEMS).should('have.length', 5);
    });
    it('render prev link', () => {
      cy.get(TEST_ID.HAS_PREV).should('exist');
    });
    it('render next link', () => {
      cy.get(TEST_ID.HAS_NEXT).should('exist');
    });
    it('render first boundary', () => {
      cy.get(TEST_ID.FIRST_BOUNDARY).should('have.length', 2);
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
