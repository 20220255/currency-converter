/// <reference types="cypress" />

import CurrencyConverterPage from "../support/pageObjects/currencyConverter"

describe('Execute Curreny Exchange', () => {
  it('should run the currency exchange', () => {
    const currencyConverterPage = new CurrencyConverterPage();
    cy.visit('/');
    const regexPattern = currencyConverterPage.executeConversion('100', 'PHP', 'EUR');
    currencyConverterPage.resultLabel.contains(regexPattern).should('be.visible');
  });
})