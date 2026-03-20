import { createContext, useState } from 'react'

interface CalculatorContextData {
  history: string[];
  updateHistory: (operation: string, parsedResult: string) => void;
}

export const CalculatorContext = createContext < CalculatorContextData | undefined>(undefined)

export function CalculatorProvider({children}: any){

  const [history, setHistory] = useState<string[]>([])
  const historyStorageKey = 'history'

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