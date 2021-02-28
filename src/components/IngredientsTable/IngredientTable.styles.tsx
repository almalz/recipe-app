import tw, { styled } from 'twin.macro'

export const Table = styled.div`
  ${tw`rounded-lg border border-darkGray w-min truncate`}
`
export const TableRow = styled.div<{ index: number }>(({ index }) => [
  tw`px-8 py-2 text-sm`,
  index % 2 == 0 ? tw`bg-primaryLight` : tw`bg-primaryLighter`
])

export const IngredientAmount = styled.div`
  ${tw`capitalize whitespace-nowrap	`}
`
export const IngredientName = styled.div`
  ${tw`capitalize whitespace-nowrap	`}
`
