import tw, { styled } from 'twin.macro'

export const ErrorContainer = styled.div`
  ${tw`w-max flex flex-col w-full py-2 px-4 mb-4 rounded-lg ring-2 ring-errorDark ring-opacity-50 bg-errorLight overflow-hidden`}
`
export const ErrorTitle = styled.p`
  ${tw`text-errorDark font-bold text-sm break-all	`}
`
export const ErrorMessage = styled.p`
  ${tw`max-w-sm md:max-w-xs sm:max-w-xs pt-4 text-error font-medium text-sm break-words	whitespace-normal`}
`
