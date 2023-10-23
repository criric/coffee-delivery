import styled from "styled-components";

export const HomeContainer = styled.main`
`

export const Banner = styled.div`
  display: flex;
  gap: 3.5rem;
`

export const BannerContent = styled.div`
  h1{
    font-family: 'Baloo 2', sans-serif;
    font-size: 3rem;
    font-weight: bold;
    color: ${props => props.theme['base-title']};
  }

  p{
    color: ${props => props.theme['base-subtitle']};
    font-size: 1.25rem;

    margin-bottom: 4.125rem;
  }
`

export const BannerAdvantagesContainer = styled.div``
export const BannerAdvantagesIcon = styled.div``