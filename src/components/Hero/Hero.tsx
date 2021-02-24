import Image from 'next/image'
import {
  HeroTitle,
  HeroImageWrapper,
  HeroWrapper,
  TitleWrapper
} from './Hero.styles'

export type HeroProps = {
  img: string //base64
  title: string
}

const Hero: React.FC<HeroProps> = ({ img, title }) => {
  return (
    <HeroWrapper>
      <HeroImageWrapper>
        <Image
          src={`data:image/jpeg;base64,${img}`}
          alt={title}
          layout="fill"
          objectFit="cover"
        />
      </HeroImageWrapper>
      <TitleWrapper>
        <HeroTitle>{title}</HeroTitle>
      </TitleWrapper>
    </HeroWrapper>
  )
}

export default Hero
