import { useContext, useEffect, useState } from "react"
import { CoffeesContext } from "../../contexts/CoffeesContext"
import { Coffees } from "../Home"

export function Cart(){
  const [coffeeCart, setCoffeeCart] = useState<Coffees[]>([])
  useEffect(()=>{
    const myCart = localStorage.getItem('coffeeCart')

    if(myCart) {
      setCoffeeCart(JSON.parse(myCart))
    }
  }, [])
  return (
    <div>
      {coffeeCart && 
      coffeeCart.map(coffee => <h1>{coffee.name}</h1>)
      }
    </div>
  )
}