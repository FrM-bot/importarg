import type ExchangeRateResponse from '$response/exchange/exchange-rate.json'

export const getExchangeRate = async () => {
  const response = await fetch('https://dolarapi.com/v1/dolares/cripto')
  const data = await response.json()
  return data as typeof ExchangeRateResponse
}
