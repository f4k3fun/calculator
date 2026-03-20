import React, { useState } from 'react'
import { Card } from "./Card";
import { CalculatorHeading } from "./CalculatorHeading";
import { Button } from "./Button";
import { listButtons } from "../utils/buttons";
import { CalculatorContext } from '../utils/CalculatorContext';
export function Calculator(){

  const [operation, setOperation] = useState('')
  const [result, setResult] = useState('')

  const { updateHistory } = React.useContext(CalculatorContext)

  function handleButtonClick(value: any){
    
    if(value === 'C'){
      setOperation('')
      setResult('')
      return
    }


    if(value === 'CE'){
      setResult('')
      setOperation(operation.slice(0, -1))

      return
    }

    
    

    if(value === "="){
      console.log(operation)
      const operationResult = eval(operation.replace(/,/g, '.'))
      const parsedResult = operationResult.toString().replace(/\./g, ',')
      updateHistory(operation, parsedResult)
      setResult(parsedResult)
     return
    }

    if (result) {
      setResult('')
      setOperation(isNaN(value) ? `${result}` : value) 
    }

    if (value === ',' && !operation.endsWith(',')){
      setOperation((prevValue) => `${prevValue},`)
      return
    }

    setOperation((prevValue) =>  `${prevValue}${operation.endsWith(',') ? "" : ""}${value}`)
  } 

  return( 
    <Card className={`
    flex flex-col gap-[1.625rem] w-[22.25rem]
    pt-14 px-8 pb-8 h-fit
    `}>
    <CalculatorHeading operation={operation} result={result}/>

    <div className="flex flex-col gap-3">
      

       {
        listButtons.map((list, index) => (
          <div key={index} className="flex gap-3">
            {list.map((button) =>(
              <Button onClick={() => handleButtonClick(button.input)} className={`w-16 h-16 ${button.className}`} key={button.input} variants={button.variants}  title={button.input} />
            ) )}
          </div>
          )
        )
       }
        
    </div>
     
    </Card>
  )
}