describe('Scrollspy', () => {
  describe('Specific root', () => {
    beforeEach(() => {
      cy.visit('/scrollspy/specific-root');
      cy.viewport(500, 500);
      cy.get('#specific-root').scrollTo(0, 0);
    });

    it('should render children', () => {
      cy.get('[data-cy=nav-wrapper]')
        .children()
        .should('have.length', 5);
      cy.get('[data-cy=section-wrapper]')
        .children()
        .should('have.length', 5);
    });

    it('should make 1st nav active when 1st section in the viewport', () => {
      cy.get('[data-cy=section-item')
        .eq(0)
        .scrollIntoView();
      cy.get('[data-cy=nav-item]')
        .eq(0)
        .should('have.class', 'active');
    });

    it('should make 2nd nav active when 2nd section in the viewport', () => {
      cy.get('[data-cy=section-item')
        .eq(1)
        .scrollIntoView();
      cy.get('[data-cy=nav-item]')
        .eq(1)
        .should('have.class', 'active');
    });
  });
});
