import tw, { styled, css } from 'twin.macro'

export const StyledSegmentedControl = styled.div`
  ${tw`flex`}
`
export const SegmentInput = styled.input`
  ${tw`invisible opacity-0 w-0 h-0 `}
`
export const SegmentLabel = styled.label<{ checked: boolean }>(
  ({ checked }) => [
    tw`border-primaryLight border-2 text-lg text-textOnP py-2 px-4`,
    !checked && tw`bg-background`,
    checked && tw`bg-primaryLight shadow-inner`
  ]
)

const firstSegment = css`
  &:first-child > label {
    ${tw`rounded-l-lg`}
  }
`
const lastSegment = css`
  &:last-child > label {
    ${tw`rounded-r-lg`}
  }
`

export const SegmentContainer = styled.div(() => [firstSegment, lastSegment])
