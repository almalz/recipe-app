import { ErrorContainer, ErrorTitle, ErrorMessage } from './Error.styles'

export type ErrorProps = {
  errorMessage: string
  errorTitle?: string
}

const Hero: React.FC<ErrorProps> = ({ errorTitle, errorMessage }) => {
  return (
    <ErrorContainer>
      <div>
        <ErrorTitle>{errorTitle}</ErrorTitle>
        <ErrorMessage>{errorMessage}</ErrorMessage>{' '}
      </div>
    </ErrorContainer>
  )
}

export default Hero
