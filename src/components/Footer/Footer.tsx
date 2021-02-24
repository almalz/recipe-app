import tw, { css } from 'twin.macro'

const Footer = () => (
  <div
    css={tw`py-2 mt-8 bg-textOnS text-center text-textOnP text-xs font-light lg:px-32 md:px-16 sm:px-8`}
  >
    <p>
      Portfolio project. Stack: Next.js, Typescript, Tailwind,
      Styled-components, twin.macro and Storybook.
    </p>
  </div>
)

export default Footer
