describe('Scrollspy', () => {
  describe('Offset', () => {
    beforeEach(() => {
      cy.visit('/scrollspy/offset');
      cy.viewport(500, 500);
      cy.scrollTo(0, 0);
    });

    it('should render children', () => {
      cy.get('[data-cy=nav-wrapper]')
        .children()
        .should('have.length', 5);
      cy.get('[data-cy=section-wrapper]')
        .children()
        .should('have.length', 5);
    });

    it('should make 2nd nav active when 2nd section looks like in the viewport with offset=-100', () => {
      cy.scrollTo(0, 450);
      cy.get('[data-cy=nav-item]')
        .eq(1)
        .should('have.class', 'active');
    });

    it('should make 3nd nav active when 3nd section looks like in the viewport with offset=-100', () => {
      cy.scrollTo(0, 950);
      cy.get('[data-cy=nav-item]')
        .eq(2)
        .should('have.class', 'active');
    });
  });
});
