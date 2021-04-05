describe('ReadingProgress / specific target and root', () => {
  describe('0%', () => {
    beforeEach(() => {
      cy.visit('/reading-progress/specific-root-and-target').viewport(
        'iphone-x'
      );
    });

    it('should be 0%', () => {
      cy.get('#article-wrapper').scrollTo('top');
      cy.get('#reading-progress').should('have.value', 0);
    });
  });

  describe('100%', () => {
    beforeEach(() => {
      cy.visit('/reading-progress/specific-root-and-target').viewport(
        'iphone-x'
      );
    });

    it('should be 100%', () => {
      cy.get('#article-wrapper').scrollTo('bottom');
      cy.get('#reading-progress').should('have.value', 100);
    });
  });
});
