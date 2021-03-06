import tw, { styled } from 'twin.macro'

export const HeroTitle = styled.span`
  ${tw`text-textOnP font-bold text-2xl capitalize`}
`

export const HeroImageWrapper = styled.div`
  ${tw`rounded-xl relative w-full h-96 overflow-hidden`}
`

export const HeroWrapper = styled.div`
  ${tw`w-full pt-8 pb-4 h-5/6`}
`

export const TitleWrapper = styled.div`
  ${tw`pt-8`}
`
