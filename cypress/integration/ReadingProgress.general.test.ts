describe('ReadingProgress', () => {
  describe('0%', () => {
    beforeEach(() => {
      cy.visit('/reading-progress/general').viewport('iphone-x');
    });

    it('should be 0%', () => {
      cy.scrollTo('top');
      cy.get('#reading-progress').should('have.value', 0);
    });
  });

  describe('100%', () => {
    beforeEach(() => {
      cy.visit('/reading-progress/general').viewport('iphone-x');
    });

    it('should be 100%', () => {
      cy.scrollTo('bottom');
      cy.get('#reading-progress').should('have.value', 100);
    });
  });
});
