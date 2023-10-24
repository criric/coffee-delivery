import { useEffect, useState } from 'react';
import { Banner } from './components/Banner';
import { HomeContainer, CoffeeContainer, CoffeeActions, CoffeeItem } from './styles';
import { createServer } from 'miragejs';
import coffeesData from '../../coffees.json'

export type Coffees = {
  id: number;
  type: string[];
  name: string;
  description: string;
  price: number;
  image: string;
  amount: number;
}
createServer({
  routes(){
    this.get('/api/coffees', () => {
      return coffeesData
    })
  }
})
export function Home(){
  const [coffees, setCoffees] = useState<Coffees[]>([])
  const [coffeeAmount, setCoffeeAmount] = useState(1)

  function handleCoffeeAmount(e){
    const newCoffeeAmount = e.target.value
    setCoffeeAmount(newCoffeeAmount)
  }

  useEffect(() => {
    fetch('/api/coffees').then(response => response.json()).then(data => setCoffees(data))
  }, [])
  return (
    <HomeContainer>
      <Banner />
      <div>
        <h1>Nossos cafés</h1>
        <CoffeeContainer>
          {coffees.map(coffee => {
            return (
              <CoffeeItem>
                {
                  coffee.type 
                  && 
                  coffee.type.map((type) => {
                    return <span>{type.toUpperCase()}</span>
                  })
                }
                
                <h2>
                  {coffee.name}
                </h2>
                <p>
                  {coffee.description}
                </p>
                <CoffeeActions>
                  <h3>R$</h3>
                  <h2>{coffee.price.toFixed(2)}</h2>
                  <input type="number" min={1} value={coffeeAmount} onChange={handleCoffeeAmount}/>
                  <button>cart</button>
                </CoffeeActions>
              </CoffeeItem>
            )
          })}
        </CoffeeContainer>
      </div>
    </HomeContainer>
  )
}