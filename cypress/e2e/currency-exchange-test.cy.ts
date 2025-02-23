/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    const currency = 'GBP';
    const regexPattern = new RegExp(`\\$\\d+.\\d\\d USD is equal to .\\d+\\.\\d\\d ${currency}`);
    cy.visit('/')
    cy.get('label')
      .contains('To:')
      .next()
      .select(currency)
    cy.get('.convert-button').click()
    cy.get('.result').contains(regexPattern).should('be.visible')
  })
})