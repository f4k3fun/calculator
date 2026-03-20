import { Calculator } from './components/Calculator'
import { HistoryCard } from './components/HistoryCalculator'
import { CalculatorProvider } from './utils/CalculatorContext'


export function App(){
  return( 
    <main className={`py-28 px-4 flex flex-col
     md:flex-row md:justify-center items-center md:items-stretch gap-2 md:px-40
     
     `}>
      <CalculatorProvider >
      <Calculator />
      <HistoryCard />
      </CalculatorProvider>
    </main>
  )
}