import { Card } from "./Card";
import { CalculatorHeading } from "./CalculatorHeading";
import { Button } from "./Button";

export function Calculator(){
  return( 
    <Card className={`
    flex flex-col gap-[1.625rem] w-[22.25rem]
    pt-14 px-8 pb-8 h-fit
    `}>
    <CalculatorHeading operation="2 + 2" result="4"/>

    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <Button className="w-16 h-16" title="CE"/>
        <Button className="flex-1" title="C"/>
        <Button className="w-16 h-16" variants="primary" title="/"/>
      </div>

        <div className="flex gap-3">
          <Button className="w-16 h-16" title="7" />
          <Button className="w-16 h-16" title="8" />

          <Button className="w-16 h-16" title="9" />
          <Button className="w-16 h-16" variants="primary" title="X" />

        </div>

        <div className="flex gap-3">
          <Button className="w-16 h-16" title="4" />
          <Button className="w-16 h-16" title="5" />

          <Button className="w-16 h-16" title="6" />
          <Button className="w-16 h-16" variants="primary" title="-" />

        </div>

        <div className="flex gap-3">
          <Button className="w-16 h-16" title="1" />
          <Button className="w-16 h-16" title="2" />

          <Button className="w-16 h-16" title="3" />
          <Button className="w-16 h-16" variants="primary" title="+" />

        </div>

        <div className="flex gap-3">
          <Button className="flex-1" title="0" />
          <Button className="w-16 h-16" title="," />

          <Button className="w-16 h-16" variants="primary" title="=" />

        </div>
    </div>
     
    </Card>
  )
}