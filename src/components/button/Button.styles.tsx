import tw, { styled } from 'twin.macro'

import { LoadingOutlined } from '@ant-design/icons'

type StyledButtonProps = {
  variant: string
  iconPath?: string
}

export const ButtonWrapper = tw.div`px-4 py-2 w-24 flex flex-row justify-between`

const StyledButton = styled.button<StyledButtonProps>(
  ({ variant, iconPath }) => [
    tw`rounded-md shadow-sm `,
    variant == 'primary' && tw`bg-primary text-textOnP text-base font-medium`,
    variant == 'secondary' &&
      tw`bg-secondary text-textOnS text-base font-medium`,
    variant == 'outline' &&
      !iconPath &&
      tw`bg-secondaryLight text-secondaryDark text-sm font-normal border border-secondaryDark`,
    iconPath &&
      tw` bg-secondaryLight text-secondaryDark  text-sm font-normal border border-secondaryDark`
  ]
)

export const StyledLoader = () => (
  <LoadingOutlined css={tw`text-base ml-2`} spin />
)

export default StyledButton
