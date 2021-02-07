import React, { ReactNode } from 'react'
import tw from 'twin.macro'

const StyledLayout = tw.div`flex flex-col items-center justify-center lg:mx-32 md:mx-16 sm:mx-8 `

type Props = {
  children?: ReactNode
}

const Layout: React.FC = ({ children }: Props) => {
  return <StyledLayout>{children}</StyledLayout>
}

export default Layout
