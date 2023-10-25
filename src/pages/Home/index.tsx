import { useContext, useEffect } from 'react';
import { Banner } from './components/Banner';
import { HomeContainer, CoffeeContainer, CoffeeActions, CoffeeItem, CoffeeDescription, CoffeeType, CoffeeAddToCart, CoffeeTypeList } from './styles';
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

export function Home(){
  const { coffees, coffeeAmount, changeCoffeeAmount, getAllCoffees} = useContext(CoffeesContext)



  useEffect(() => {
    fetch('/api/coffees').then(response => response.json()).then(data => getAllCoffees(data))
  }, [])

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
                    <CoffeeAddToCart type='button'>
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