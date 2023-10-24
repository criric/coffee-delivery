import { useEffect, useState } from 'react';
import { Banner } from './components/Banner';
import { HomeContainer } from './styles';
import { createServer } from 'miragejs';
import coffeesData from '../../coffees.json'
import { Coffee } from './components/Coffee';

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

  useEffect(() => {
    fetch('/api/coffees').then(response => response.json()).then(data => setCoffees(data))
  }, [])
  return (
    <HomeContainer>
      <Banner />
      <div>
        {coffees.map(coffee => {
          return <Coffee key={coffee.id} coffee={coffee}/>
        })}
      </div>
    </HomeContainer>
  )
}