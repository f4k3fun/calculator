import { Text } from './Text'

type Props = { 
  operation: string
  result: string
}
 
export function CalculatorHeading({operation, result}: Props){
  return(
    <div className={`
        flex flex-col gap-2 px-[1.375rem]
        cursor-default select-none
        `}>
      <Text variants="muted" as="div" className="flex items-center justify-end h-7" title={result && operation} />

      <div className="flex items-center justify-between h-9">
        <Text variants="muted" title="=" />
        <Text variants="blast" title={result || operation} />
      </div>
    </div>
  )
}