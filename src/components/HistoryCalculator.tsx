import { Card } from './Card'
import { Text } from './Text'

export function HistoryCard(){
  return(
    <Card className='py-10 px-8 w-full'>
      <Text as="h1" variants='heading' title='Historico de Operações' className='mb-4'/>

      <ul className='flex flex-col gap-3'>
        <Text variants='muted' as="li" title="1 + 1 = 2" />
        <Text variants='muted' as="li" title="2 + 3 + 1 = 6" />
        <Text variants='muted' as="li" title="2 + 2 = 4" />
        <Text variants='muted' as="li" title="6 + 6 = 12" />
      </ul>
    </Card>
  )
}