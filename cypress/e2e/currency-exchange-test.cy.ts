/// <reference types="cypress" />

import CurrencyConverterPage from "../support/pageObjects/currencyConverter"

describe('Execute Curreny Exchange', () => {
  it('should run the currency exchange', () => {
    const currencyConverterPage = new CurrencyConverterPage();
    cy.visit('/');
    const regexPattern = currencyConverterPage.executeConversion('100', 'USD', 'PH');
    currencyConverterPage.resultLabel.contains(regexPattern).should('be.visible');
  });
})