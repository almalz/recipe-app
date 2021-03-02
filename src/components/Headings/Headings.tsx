import { Children } from 'react'
import {
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  Wrapper
} from './Headings.styles'

export type Props = {
  children: string
}

export const Heading1: React.FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <StyledHeading1> {children} </StyledHeading1>
    </Wrapper>
  )
}
