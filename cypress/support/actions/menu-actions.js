import { MenuPage } from '../pages/menu-page'

export class MenuActions {
  constructor() {
    this.menuPage = new MenuPage()
  }

  goToMenu() {
    this.menuPage.menuLink().click()
    return this
  }
  openMenu() {
    this.menuPage.menuLink().click()
    return this
  }

  openCategory(category) {
    this.menuPage.categoryLinkBySlug(category).should('be.visible').click()
    return this
  }
}
