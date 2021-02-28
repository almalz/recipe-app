import tw, { styled } from 'twin.macro'

export const ErrorContainer = styled.div`
  ${tw`flex flex-col py-2 px-4 rounded-lg ring-2 ring-errorDark ring-opacity-50 bg-errorLight w-max truncate`}
`
export const ErrorTitle = styled.span`
  ${tw`capitalize	text-errorDark font-bold`}
`
export const ErrorMessage = styled.span`
  ${tw`pt-4 capitalize text-error font-medium	`}
`
