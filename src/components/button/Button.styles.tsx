import tw, { styled } from 'twin.macro'

type StyledButtonProps = {
  variant: string
  iconPath?: string
}

export const ButtonWrapper = tw.div`px-4 py-2 w-24 flex flex-row justify-evenly items-center`

const StyledButton = styled.button<StyledButtonProps>(
  ({ variant, iconPath }) => [
    tw`rounded-md shadow-sm outline-none focus:outline-none active:ring active:ring-opacity-30 disabled:opacity-50`,
    variant == 'primary' &&
      tw`bg-primary text-textOnP text-base font-medium hover:bg-primaryDark active:ring-primary`,
    variant == 'secondary' &&
      tw`bg-secondary text-textOnS text-base font-medium hover:bg-secondaryDark active:ring-secondary`,
    variant == 'outline' &&
      !iconPath &&
      tw`bg-secondaryLight text-secondaryDark text-sm font-normal border border-secondaryDark active:ring-2 active:ring-secondary`,
    iconPath &&
      tw` bg-secondaryLight text-secondaryDark text-sm font-normal border border-secondaryDark active:ring-2 active:ring-secondary`
  ]
)

export default StyledButton
