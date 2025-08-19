import { useCallback } from "react"

export function useCurrencyFormatter(){
  const formatCurrency = useCallback((value:number, currency:string, locale:string): string => {
    const formattedValue = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);
    return formattedValue
  },[])
  return {formatCurrency}
}

