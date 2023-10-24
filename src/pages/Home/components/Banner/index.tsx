import { ShoppingCart, Package, Timer, Coffee } from "@phosphor-icons/react";
import { BannerContent, BannerAdvantagesContainer, BannerAdvantageItem, BannerAdvantagesIcon, BannerContainer } from "./styles";
import bannerCoffee from '../../../../assets/banner-coffee.png';


export function Banner(){
  return(
    <BannerContainer>
      <BannerContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

        <BannerAdvantagesContainer>
          <BannerAdvantageItem>
            <BannerAdvantagesIcon iconbackgroundcolor='cart'>
              <ShoppingCart size={24} weight='fill'/>
            </BannerAdvantagesIcon>
            <span>Compra simples e segura</span>
          </BannerAdvantageItem>
          <BannerAdvantageItem>
            <BannerAdvantagesIcon iconbackgroundcolor='box'>
              <Package size={24} weight='fill' />
            </BannerAdvantagesIcon>
            <span>Embalagem mantém o café intacto</span>
          </BannerAdvantageItem>
          <BannerAdvantageItem>
            <BannerAdvantagesIcon iconbackgroundcolor='clock'>
              <Timer size={24} weight='fill' />
            </BannerAdvantagesIcon>
            <span>Entrega rápida e rastreada</span>
          </BannerAdvantageItem>
          <BannerAdvantageItem>
            <BannerAdvantagesIcon iconbackgroundcolor='coffee'>
              <Coffee size={24} weight='fill' />
            </BannerAdvantagesIcon>
            <span>O café chega fresquinho até você</span>
          </BannerAdvantageItem>
        </BannerAdvantagesContainer>

      </BannerContent>
      <img src={bannerCoffee} alt="" />
    </BannerContainer>
  )
}