import { Coffees } from "../..";
import { CoffeeActions, CoffeeContainer } from "./styles";

type CoffeeProps = {
  key: number
  coffee: Coffees
}

export function Coffee({coffee}: CoffeeProps){
  console.log(coffee);
  
  return(
    <CoffeeContainer>
      <span>
        {coffee.type}
      </span>
      <h1>
        {coffee.name}
      </h1>
      <p>
        {coffee.description}
      </p>
      <CoffeeActions>
        <span>R$</span>
        <h2>{coffee.price.toFixed(2)}</h2>
        <input type="number" />
        <button>cart</button>
      </CoffeeActions>
    </CoffeeContainer>
  )
}