import styled from "styled-components";

export const HomeContainer = styled.main`

  h1{
    color: ${props => props.theme['base-subtitle']}
  }
`

export const CoffeeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`

export const CoffeeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 16rem;
  height: 19.375rem;
  padding: 20px;

  background-color: ${props => props.theme['base-card']};

  border-radius: 6px 36px;

  text-align: center;

  span{
    font-weight: bold;
    font-size: 0.625rem;
    color: ${props => props.theme['yellow-dark']};
    background-color: ${props => props.theme['yellow-light']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
  }

  p{
    font-size: 0.875rem;
    color: ${props => props.theme['base-label']};
  }
`

export const CoffeeActions = styled.div`
  display: flex;
  align-items: center;
  input{
    display: flex;
    height: 2.375rem;
    width: 3.5rem;
    justify-content: center;
    align-items: center;
    gap: 4px;

    background-color: ${props => props.theme['base-button']};
    border: 0;

    text-align: center;
  }
`