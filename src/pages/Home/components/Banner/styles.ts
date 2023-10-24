import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  gap: 3.5rem;

  margin: 5.75rem 0;
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

export const BannerAdvantagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem
`

export const BannerAdvantageItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`


const ICONS_BACKGROUND_COLOR = {
  cart: 'yellow-dark',
  clock: 'yellow',
  box: 'base-text',
  coffee: 'purple'
} as const

interface iconbackgroundcolor{
  iconbackgroundcolor: keyof typeof ICONS_BACKGROUND_COLOR;
}
export const BannerAdvantagesIcon = styled.div<iconbackgroundcolor>`
  background-color: ${props => props.theme[ICONS_BACKGROUND_COLOR[props.iconbackgroundcolor]]};
  color: ${props => props.theme['white']};

  border-radius: 50%;

  padding: 0.5rem;

  display: flex;
  align-items: center;
`