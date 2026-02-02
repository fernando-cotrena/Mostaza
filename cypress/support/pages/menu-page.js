export class MenuPage {
  menuInFooter() {
    return cy.get('href="/#menu"')
  }
  menuLink() {
    return cy.get('a[href*="mega-hamburguesas"]')
  }
  categoryByName(name) {
    return cy.contains('li.menu-item a', name)
  }

  categoryLinkBySlug(categorySlug) {
    return cy.get(`a[href*="${categorySlug}"]`)
  }
}
