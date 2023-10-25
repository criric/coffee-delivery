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

  margin-top: 3.375rem;
`

export const CoffeeItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 16rem;
  height: 19.375rem;
  padding: 20px;

  background-color: ${props => props.theme['base-card']};

  border-radius: 6px 36px;

  text-align: center;

  p{
    font-size: 0.875rem;
    color: ${props => props.theme['base-label']};
  }

  img{
    margin-top: calc(0px - 20px - 20px);
  }
`

export const CoffeeTypeList = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const CoffeeType = styled.span`
  font-weight: bold;
  font-size: 0.625rem;
  color: ${props => props.theme['yellow-dark']};
  background-color: ${props => props.theme['yellow-light']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
`

export const CoffeeDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const CoffeeActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
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

  div{
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const CoffeeAddToCart = styled.button`
  border: 0;
  background-color: ${props => props.theme["purple-dark"]};
  color: ${props => props.theme["white"]};

  padding: 0.5rem;
  max-height: 40px;

  border-radius: 6px;

  &:hover{
    cursor: pointer;
    background-color: ${props => props.theme["purple"]};
  }
`