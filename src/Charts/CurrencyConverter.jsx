import { Select, SelectItem } from "@tremor/react";
import { useState } from "react";
import { CalculatorIcon } from "@heroicons/react/outline";
import { TextInput } from "@tremor/react";


export function CurrencyConverter() {
  const [value, setValue] = useState("");
  return (
    <>
      
      <div className="max-w-sm mx-auto space-y-6">
        
        <Select value={value} onValueChange={setValue}>
          <SelectItem value="1" icon={CalculatorIcon}>
          USD Ghc
          </SelectItem>
          <SelectItem value="2" icon={CalculatorIcon}>
          EUR Ghc
          </SelectItem>
          <SelectItem value="4" icon={CalculatorIcon}>
          GBR Ghc
          </SelectItem>
        </Select>
      </div>

      <div className=" py-5 mx-auto">
      <TextInput placeholder="USD" type="number" className="max-w-5 h-16 mx-auto mb-5" />
      <TextInput placeholder="Ghc" type="number" className="max-w-5 h-16 mx-auto" />

      </div>
    </>
  )
}

