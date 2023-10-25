import { ReactNode, createContext, useEffect, useState } from "react"
import { Coffees } from "../pages/Home"

interface CoffeesContextType{
  coffees: Coffees[]
  coffeeAmount: number
  changeCoffeeAmount: (e: any) => void
}

interface CoffeesContextProviderProps{
  children: ReactNode
}

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({children}: CoffeesContextProviderProps){
  const [coffees, setCoffees] = useState<Coffees[]>([])
  const [coffeeAmount, setCoffeeAmount] = useState(1)

  function changeCoffeeAmount(e){
    const newCoffeeAmount = e.target.value
    setCoffeeAmount(newCoffeeAmount)
  }

  useEffect(() => {
    fetch('/api/coffees').then(response => response.json()).then(data => setCoffees(data))
  }, [])
  
  return (
    <CoffeesContext.Provider value={{coffees, coffeeAmount, changeCoffeeAmount}}>
      {children}
    </CoffeesContext.Provider>
  )
}