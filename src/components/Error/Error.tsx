import { ErrorContainer, ErrorTitle, ErrorMessage } from './Error.styles'

export type ErrorProps = {
  errorMessage: string
  errorTitle?: string
}

const Hero: React.FC<ErrorProps> = ({ errorTitle, errorMessage }) => {
  return (
    <ErrorContainer>
      <ErrorTitle>{errorTitle}</ErrorTitle>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ErrorContainer>
  )
}

export default Hero
