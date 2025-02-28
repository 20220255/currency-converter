class CurrencyConverterPage {
  get amountInput() {
    return cy.get('input');
  }

  get fromCurrencySelect() {
    return cy.get(':nth-child(2) > select');
  }

  get toCurrencySelect() {
    return cy.get(':nth-child(3) > select');
  }

  get convertButton() {
    return cy.get('.convert-button');
  }

  get resultLabel() {
    return cy.get('.result');
  }

  executeConversion(amount: string, fromCurrency: string, toCurrency: string): RegExp {
    const regexPattern = new RegExp(`.\\d+.\\d\\d ${fromCurrency} is equal to .\\d+.\\d\\d ${toCurrency}`)
    this.amountInput.type(amount);
    this.fromCurrencySelect.select(fromCurrency);
    this.toCurrencySelect.select(toCurrency);
    this.convertButton.click();
    return regexPattern;
  }
}

export default CurrencyConverterPage;
