describe('ReadingProgress', () => {
  describe('0%', () => {
    beforeEach(() => {
      cy.visit('/reading-progress/general').viewport('iphone-x');
      cy.scrollTo('top');
    });

    it('should be 0%', () => {
      cy.get('#reading-progress').should('have.value', 0);
    });
  });

  describe('100%', () => {
    beforeEach(() => {
      cy.visit('/reading-progress/general').viewport('iphone-x');
      cy.scrollTo('bottom');
    });

    it('should be 100%', () => {
      cy.get('#reading-progress').should('have.value', 100);
    });
  });
});
