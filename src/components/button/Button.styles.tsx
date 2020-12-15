import tw, { styled } from 'twin.macro'

type StyledButtonProps = {
  variant: string
}

const StyledButton = styled.button<StyledButtonProps>(({ variant }) => [
  variant == 'primary' &&
    tw`px-6 py-2 bg-primary text-secondary rounded-xl shadow-lg text-lg font-semibold`,
  variant == 'secondary' &&
    tw`px-6 py-2 bg-secondary text-primary rounded-xl shadow-lg text-lg font-semibold`
])

export default StyledButton
