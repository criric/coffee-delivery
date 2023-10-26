import { Coffees } from "./reducer.ts";

export enum ActionTypes{
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART'
}

export function addCoffeeToCartAction(coffee: Coffees){
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      coffee,
    }
  }
}

export function removeCoffeeFromCartAction(id: number){
  return{
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      id,
    }
  }
}