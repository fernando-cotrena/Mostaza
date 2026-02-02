export class JoinUsFormAsserts {
  shouldSeeSuccessMessage() {
    cy.contains('Gracias por tu postulación').should('be.visible')
    return this
  }
}
