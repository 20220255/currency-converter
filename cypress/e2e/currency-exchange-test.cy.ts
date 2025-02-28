/// <reference types="cypress" />

import CurrencyConverterPage from "../support/pageObjects/currencyConverter"
import testData from '../testData/testData.js'

describe('Execute Curreny Exchange', () => {
  it('should run the currency exchange', () => {
    testData.forEach((data) => {
      const currencyConverterPage = new CurrencyConverterPage();
      cy.visit('/');
      const regexPattern = currencyConverterPage.executeConversion(data.amount, data.fromCurrency, data.toCurrency);
      currencyConverterPage.resultLabel.contains(regexPattern).should('be.visible');
    })
  });
    // const currencyConverterPage = new CurrencyConverterPage();
    // cy.visit('/');
    // const regexPattern = currencyConverterPage.executeConversion('100', 'PHP', 'EUR');
    // currencyConverterPage.resultLabel.contains(regexPattern).should('be.visible');
  // });
})