import tw, { styled } from 'twin.macro'

export const StyledNavbar = styled.div`
  ${tw`flex relative justify-center w-full mt-4 py-2 `}
`

export const StyledItemContainer = styled.div`
  ${tw`flex relative justify-around`}
`

export const StyledNavbarItem = styled.button`
  ${tw` mx-8 px-4 font-semibold text-textOnP border-b-2 border-transparent hover:border-textOnP focus:outline-none`}
`

export const StyledSigninItem = styled.button`
  ${tw`absolute font-semibold right-0 mx-8 px-4 text-textOnP border-b-2 border-transparent hover:border-textOnP focus:outline-none`}
`
export const MenuDropdown = styled.div(() => [
  tw`absolute w-32 text-textOnP bg-secondaryLight rounded-md z-10 shadow-sm right-0 top-10 hover:bg-secondary`
])

export const MenuDropdownItem = styled.div<{ isVisible: boolean }>(
  ({ isVisible }) => [tw`px-4 py-2 text-textOnP`, !isVisible && tw`hidden`]
)
