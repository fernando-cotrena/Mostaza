import { MenuActions } from '../../support/actions/menu-actions'

import MenuAsserts from '../../support/asserts/menu-asserts'
import { CATEGORIES } from '../../support/constants/categories'

describe('Menu navigation', () => {
  const menu = new MenuActions()
  const menuShould = new MenuAsserts()

  beforeEach(() => {
    cy.visit('/')
    menu.goToMenu().openMenu()
  })

  it('opens the Mega category from the home page and displays its menu items', () => {
    menu.openCategory(CATEGORIES.MEGA)
    menuShould.shouldSeeCategory(CATEGORIES.MEGA).shouldDisplayMenuItems()
  })

  it('allows the user to navigate through all menu categories', () => {
    const categoriesToTest = [
      CATEGORIES.MEGA,
      CATEGORIES.POLLOS,
      CATEGORIES.PARAVOS,
    ]

    menuShould.shouldSeeCategories(categoriesToTest)

    categoriesToTest.forEach((category) => {
      menu.openCategory(category)
      menuShould.shouldSeeCategory(CATEGORIES.MEGA).shouldDisplayMenuItems()
    })
  })
})
