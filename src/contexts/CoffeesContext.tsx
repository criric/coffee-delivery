import { ReactNode, createContext, useState } from "react"
import { Coffees } from "../pages/Home"
import { createServer } from "miragejs"
import coffeesData from '../coffees.json'
interface CoffeesContextType{
  coffees: Coffees[]
  coffeeAmount: number
  changeCoffeeAmount: (e: any) => void
  getAllCoffees: (coffee: Coffees[]) => void
}

interface CoffeesContextProviderProps{
  children: ReactNode
}

createServer({
  routes(){
    this.get('/api/coffees', () => {
      return coffeesData
    })
  }
})

export const CoffeesContext = createContext({} as CoffeesContextType)

export function CoffeesContextProvider({children}: CoffeesContextProviderProps){
  const [coffees, setCoffees] = useState<Coffees[]>([])
  const [coffeeAmount, setCoffeeAmount] = useState(1)

  function getAllCoffees(coffees: Coffees[]){
    setCoffees(coffees)
  }

  function changeCoffeeAmount(e){
    const newCoffeeAmount = e.target.value
    setCoffeeAmount(newCoffeeAmount)
  }

  return (
    <CoffeesContext.Provider value={{coffees, coffeeAmount, changeCoffeeAmount, getAllCoffees}}>
      {children}
    </CoffeesContext.Provider>
  )
}