import { produce } from "immer";
import { ActionTypes } from "./actions";

export type Coffees = {
  id: number;
  type: string[];
  name: string;
  description: string;
  price: number;
  image: string;
  amount: number;
}

interface CoffeesState{
  coffees: Coffees[]
}

export function coffeesReducer(state: CoffeesState, action: any){
  switch(action.type){
    case ActionTypes.ADD_COFFEE_TO_CART:
      return produce(state, draft => {
        draft.push(action.payload.coffee)
      })

    case ActionTypes.REMOVE_COFFEE_FROM_CART:
      return produce(state, draft => {
        draft.coffees.filter(coffee =>{
          return coffee.id != action.payload.id
        })
      })

    default:
      return state
  }
}