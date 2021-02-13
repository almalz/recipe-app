import tw, { styled } from 'twin.macro'

export const StyledInput = styled.input<{ hasIcon: boolean }>(({ hasIcon }) => [
  tw`w-full pl-3 pr-3 py-2 rounded-lg border border-mediumGray outline-none focus:border-secondary`,
  hasIcon && tw`-ml-10 pl-10`
])

export const StyledLabel = styled.label`
  ${tw`text-sm font-semibold px-1 text-darkGray`}
`

export const InputIcon = styled.div`
  ${tw`w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center`}
`
export const ErrorMessage = styled.span`
  ${tw`text-error text-xs`}
`
