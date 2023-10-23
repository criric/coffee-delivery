import { ShoppingCart } from '@phosphor-icons/react'
import mainLogo from '../../assets/main-logo.svg'
import { CartButton, HeaderContainer, Location } from './styles'
import { MapPin } from '@phosphor-icons/react/dist/ssr/MapPin'
import { NavLink } from "react-router-dom";

export function Header(){
  return (
    <HeaderContainer>
      <NavLink to='/'>
        <img src={mainLogo} alt='' />
      </NavLink>

      <nav>
        <Location>
          <MapPin size={24} weight='fill'/>
          <span>Localização</span>
        </Location>
        <CartButton href="/cart">
          <ShoppingCart size={24} weight='fill'/>
        </CartButton>
      </nav>
    </HeaderContainer>
  )
}