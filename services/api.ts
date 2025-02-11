import axios from 'axios';

export async function getExchangeRates(baseCurrency: string): Promise<{ [key: string]: number }> {
    try {
        const exchangerateApiKey = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY; 
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${exchangerateApiKey}/latest/${baseCurrency}`);
        return response.data.conversion_rates;        
    } catch (error: Error | unknown) {
        if (error instanceof Error) {
            console.error('Error fetching exchange rates: ', error.message);
        } else {
            console.error('Error fetching exchange rates: ', error);
        }
        return {};
    }
}
