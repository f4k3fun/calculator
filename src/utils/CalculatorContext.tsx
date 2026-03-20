import { createContext, useState, useEffect } from 'react'

interface CalculatorContextData {
  history: string[];
  updateHistory: (operation: string, parsedResult: string) => void;
}

export const CalculatorContext = createContext < CalculatorContextData | undefined>(undefined)

export function CalculatorProvider({children}: any){

  const [history, setHistory] = useState<string[]>([])
  const historyStorageKey = 'history'

  useEffect(() => {
   const historyStorage = localStorage.getItem(historyStorageKey || null)
    setHistory(JSON.parse(historyStorage || '[]'))
  }, [])

  function updateHistory(operation:string, parsedResult: string){
    setHistory((prev) => {
      const updatedHistory = [...prev, `${operation} = ${parsedResult}`]
      localStorage.setItem(historyStorageKey, JSON.stringify(updatedHistory))

      return updatedHistory
    })
  }

  return(
    <CalculatorContext.Provider value ={{ history, updateHistory}} >
      {children}
    </CalculatorContext.Provider>
  )

}