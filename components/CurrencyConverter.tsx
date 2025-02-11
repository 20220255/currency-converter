'use client'

import currencies from '@/data/currencies';
import { getExchangeRates } from '@/services/api';
import React, { ChangeEvent, useState } from 'react'

interface CurrencyConverterProps {
    baseCurrency: string;
}

const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ baseCurrency }) => {

    const [amount, setAmount] = useState<number>(1);
    const [fromCurrency, setFromCurrency] = useState<string>(baseCurrency);
    const [toCurrency, setToCurrency] = useState<string>('EUR');
    const [fromCurrencySymbol, setFromCurrencySymbol] = useState<string>('$');
    const [toCurrencySymbol, setToCurrencySymbol] = useState<string>('€');
    const [convertedAmount, setConvertedAmount] = useState<string>('');

    const handleConvert = async () => {
        // get the exchange rates of the selected from currency using API
        const rates = await getExchangeRates(fromCurrency);
        
        // get the symbol of the selected currencies
        const fromCurrencySymbol = currencies.find((currency) => currency.code === fromCurrency)?.symbol;
        setFromCurrencySymbol(fromCurrencySymbol || '');
        const toCurrencySymbol = currencies.find((currency) => currency.code === toCurrency)?.symbol;
        setToCurrencySymbol(toCurrencySymbol || '');
        
        // get the rate of the selected to currency
        const rate = rates[toCurrency];
        setConvertedAmount((amount * rate).toFixed(2));
    };

    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    };

    const handleFromCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setFromCurrency(event.target.value);
    };

    const handleToCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setToCurrency(event.target.value);
    };

    return (
        <div className="currency-converter">
            <h2>{'Currency Converter'.toUpperCase()}</h2>
            <form className="converter-form">
                <div className="form-group">
                    <label>Amount:</label>
                    <input type="number" value={amount.toString()} onChange={handleAmountChange} />
                </div>
                <div className="form-group">
                    <label>From:</label>
                    <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                        {currencies.map((currency) => (
                            <option key={currency.code} value={currency.code}>
                                {currency.code} - {currency.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>To:</label>
                    <select value={toCurrency} onChange={handleToCurrencyChange}>
                        {currencies.map((currency) => (
                            <option key={currency.code} value={currency.code}>
                                {currency.code} - {currency.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="button" onClick={handleConvert} className="convert-button">
                    Convert
                </button>
            </form>
            {convertedAmount && (
                <p className="result">
                    {fromCurrencySymbol}{amount.toFixed(2)} {fromCurrency} is equal to {toCurrencySymbol}{convertedAmount} {toCurrency}
                </p>
            )}
        </div>
    );

}

export default CurrencyConverter
