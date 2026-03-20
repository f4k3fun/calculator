import { useContext } from 'react'
import { Card } from './Card'
import { Text } from './Text'
import { CalculatorContext } from '../utils/CalculatorContext'



export function HistoryCard(){
  const { history } = useContext(CalculatorContext)
  return(
    <Card className='py-10 px-8 w-full'>
      <Text as="h1" variants='heading' title='Historico de Operações' className='mb-4'/>

      <ul className='flex flex-col gap-3'>

        {
          history.map((result, index) => (
            <Text key={index} variants='muted' as="li" title={result} />
          ))
        }
        
        
      </ul>
    </Card>
  )
}