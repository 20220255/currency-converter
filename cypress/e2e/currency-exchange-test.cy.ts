/// <reference types="cypress" />

import { Button } from "../support/Objects/classObjects";
import CurrencyConverterPage from "../support/pageObjects/currencyConverter"
import testData from '../testData/testData.js'

describe('Execute Curreny Exchange', () => {
  it('should run the currency exchange', () => {
    const btnConvert =  new Button("Convert");
    const currencyConverterPage = new CurrencyConverterPage();

    testData.forEach((data) => {
      cy.visit('/');
      btnConvert.click();
      const regexPattern = currencyConverterPage.executeConversion(data.amount, data.fromCurrency, data.toCurrency);
      currencyConverterPage.resultLabel.contains(regexPattern).should('be.visible');
    })

  });
})