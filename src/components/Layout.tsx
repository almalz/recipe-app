import React, { ReactNode } from 'react'
import tw from 'twin.macro'

const StyledLayout = tw.div`antialiased text-gray-900 flex items-center justify-center min-h-screen`

type Props = {
  children?: ReactNode
}

const Layout: React.FC = ({ children }: Props) => {
  return <StyledLayout>{children}</StyledLayout>
}

export default Layout
