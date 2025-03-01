import {Button, DropdownList, InputText} from "../Objects/classObjects";

class CurrencyConverterPage {
  get resultLabel() {
    return cy.get('.result');
  }

  executeConversion(amount: string, fromCurrency: string, toCurrency: string): RegExp {
    const regexPattern = new RegExp(`.\\d+.\\d\\d ${fromCurrency} is equal to .\\d+.\\d\\d ${toCurrency}`)
    const dropdownListFrom = new DropdownList('From');
    const dropdownListTo = new DropdownList('To');
    const convertButton = new Button('Convert');
    const amountInput = new InputText('Amount');

    amountInput.type(amount);
    dropdownListFrom.choose(fromCurrency);
    dropdownListTo.choose(toCurrency);
    convertButton.click();

    return regexPattern;
  }
}

export default CurrencyConverterPage;