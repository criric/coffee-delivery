import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0rem;

  nav{
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${props => props.theme["purple-light"]};
  color: ${props => props.theme["purple-dark"]};

  padding: 0.5rem;

  border-radius: 6px;
`

export const CartButton = styled.a`
  text-decoration: none;
  background-color: ${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};

  padding: 0.5rem;
  max-height: 40px;

  border-radius: 6px;
`