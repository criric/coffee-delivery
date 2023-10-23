import bannerCoffee from '../../assets/banner-coffee.png';
import { HomeContainer, Banner, BannerContent, BannerAdvantagesContainer, BannerAdvantagesIcon } from './styles';
export function Home(){
  return (
    <HomeContainer>
      <Banner>
        <BannerContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

          <BannerAdvantagesContainer>
            <div>
              <BannerAdvantagesIcon />
              <span></span>
            </div>
            <div>
              <BannerAdvantagesIcon />
              <span></span>
            </div>
            <div>
              <BannerAdvantagesIcon />
              <span></span>
            </div>
            <div>
              <BannerAdvantagesIcon />
              <span></span>
            </div>
          </BannerAdvantagesContainer>

        </BannerContent>
        <img src={bannerCoffee} alt="" />
      </Banner>
    </HomeContainer>
  )
}