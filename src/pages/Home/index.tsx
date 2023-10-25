import { useContext, useEffect, useState } from 'react';
import { Banner } from './components/Banner';
import { HomeContainer, CoffeeContainer, CoffeeActions, CoffeeItem, CoffeeDescription, CoffeeType, CoffeeAddToCart, CoffeeTypeList } from './styles';
import { createServer } from 'miragejs';
import coffeesData from '../../coffees.json'
import { ShoppingCart } from '@phosphor-icons/react';
import { CoffeesContext } from '../../contexts/CoffeesContext';

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
  const { coffees, coffeeAmount, changeCoffeeAmount} = useContext(CoffeesContext)

  return (
    <HomeContainer>
      <Banner />
      <div>
        <h1>Nossos cafés</h1>
        <CoffeeContainer>
          {coffees.map(coffee => {
            return (
              <CoffeeItem key={coffee.id}>
                <img src={coffee.image} alt="" />
                <CoffeeTypeList>
                  {
                    coffee.type 
                    && 
                    coffee.type.map((type) => {
                      return <CoffeeType key={type}>{type.toUpperCase()}</CoffeeType>
                    })
                  }
                </CoffeeTypeList>
                <CoffeeDescription>
                  <h2>
                    {coffee.name}
                  </h2>
                  <p>
                    {coffee.description}
                  </p>
                </CoffeeDescription>
                <CoffeeActions>
                  <div>
                    <span>R$</span>
                    <h2>{coffee.price.toFixed(2)}</h2>
                  </div>
                  <div>
                    <input type="number" min={1} value={coffeeAmount} onChange={changeCoffeeAmount}/>
                    <CoffeeAddToCart>
                      <ShoppingCart size={24} weight='fill'/>
                    </CoffeeAddToCart>
                  </div>
                </CoffeeActions>
              </CoffeeItem>
            )
          })}
        </CoffeeContainer>
      </div>
    </HomeContainer>
  )
}