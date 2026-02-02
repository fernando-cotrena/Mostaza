export default class MenuAsserts {
  shouldSeeCategories(categories) {
    categories.forEach((categoryHref) => {
      cy.get(`a[href*="${categoryHref}"]`).should('be.visible')
    })
    return this
  }

  shouldSeeCategory(category) {
    cy.get(`a[href*="${category}"]`).should('be.visible')

    return this
  }

  shouldDisplayMenuItems() {
    cy.get('.elementor-flip-box')
      .should('have.length.greaterThan', 0)
      .and('be.visible')

    return this
  }
}
