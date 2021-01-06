import tw, { styled } from 'twin.macro'

export const StyledNavbar = styled.div`
  ${tw`flex justify-around font-semibold lg:mx-64 md:mx-28 sm:mx-16 `}
`

export const StyledNavbarItem = styled.div`
  ${tw`px-4 py-2 text-textOnP hover:text-textOnP hover:bg-primaryDark rounded-full`}
`
