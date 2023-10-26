import { ReactNode, createContext, useEffect, useReducer, useState } from "react"
import { createServer } from "miragejs"
import coffeesData from '../coffees.json'
import { Coffees, coffeesReducer } from "../reducers/reducer"
import { addCoffeeToCartAction } from "../reducers/actions"
interface CoffeesContextType{
  coffees: Coffees[]
  coffeeAmount: number
  changeCoffeeAmount: (e: React.ChangeEvent<HTMLInputElement>) => void
  getAllCoffees: (coffee: Coffees[]) => void
  addCoffeeToCart: (coffee: Coffees) => void
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
  const [coffeeCart, dispatch] = useReducer(
    coffeesReducer,
    {
      coffees: []
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem('coffeeCart')

      if(storedStateAsJSON){
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    }
  )

  function getAllCoffees(coffees: Coffees[]){
    setCoffees(coffees)
  }

  function changeCoffeeAmount(e: React.ChangeEvent<HTMLInputElement>){
    const newCoffeeAmount = e.target.value
    setCoffeeAmount(+newCoffeeAmount)
  }

  function addCoffeeToCart(coffee: Coffees){
    dispatch(addCoffeeToCartAction(coffee))
  }
    
  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeCart)
    localStorage.setItem('coffeeCart', stateJSON)
  },[coffeeCart])
  return (
    <CoffeesContext.Provider value={{coffees, coffeeAmount, changeCoffeeAmount, getAllCoffees, addCoffeeToCart}}>
      {children}
    </CoffeesContext.Provider>
  )
}