interface Currency {
  code: string;
  name: string;
  country: string;
  symbol: string;
}
const currencies: Currency[] = [
  { code: 'USD', name: 'United States Dollar', country: 'United States', symbol: '$' },
  { code: 'EUR', name: 'Euro', country: 'Eurozone', symbol: '€' },
  { code: 'GBP', name: 'British Pound', country: 'United Kingdom', symbol: '£' },
  { code: 'PHP', name: 'Philippine Peso', country: 'Philippines', symbol: '₱' },
  { code: 'JPY', name: 'Japanese Yen', country: 'Japan', symbol: '¥' },
  { code: 'AUD', name: 'Australian Dollar', country: 'Australia', symbol: '$' },
  { code: 'KRW', name: 'South Korean Won', country: 'South Korea', symbol: '₩' },
  { code: 'CAD', name: 'Canadian Dollar', country: 'Canada', symbol: '$' },
  { code: 'CHF', name: 'Swiss Franc', country: 'Switzerland', symbol: 'CHF' },
  { code: 'CNY', name: 'Chinese Yuan', country: 'China', symbol: '¥' },
  { code: 'INR', name: 'Indian Rupee', country: 'India', symbol: '₹' },
  { code: 'BRL', name: 'Brazilian Real', country: 'Brazil', symbol: 'R$' },
  { code: 'RUB', name: 'Russian Ruble', country: 'Russia', symbol: '₽' },
  { code: 'MXN', name: 'Mexican Peso', country: 'Mexico', symbol: '$' },
  { code: 'AED', name: 'United Arab Emirates Dirham', country: 'United Arab Emirates', symbol: 'AED' },
  { code: 'ARS', name: 'Argentine Peso', country: 'Argentina', symbol: '$' },
  { code: 'TRY', name: 'Turkish Lira', country: 'Turkey', symbol: '₺' },
  { code: 'THB', name: 'Thai Baht', country: 'Thailand', symbol: '฿' },
  { code: 'ZAR', name: 'South African Rand', country: 'South Africa', symbol: 'R' },
];

export default currencies;
