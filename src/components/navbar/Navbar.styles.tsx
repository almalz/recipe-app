import tw, { styled } from 'twin.macro'

export const StyledNavbar = styled.div`
  ${tw`flex justify-around font-semibold mt-4`}
`

export const StyledNavbarItem = styled.div`
  ${tw`mx-8 px-4 py-2 text-textOnP border-b-2 border-transparent hover:border-textOnP`}
`
