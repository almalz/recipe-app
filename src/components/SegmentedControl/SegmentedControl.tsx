import { ChangeEvent, useState } from 'react'
import {
  SegmentInput,
  SegmentLabel,
  StyledSegmentedControl,
  SegmentContainer
} from './SegmentedControl.styled'

export type SegmentItem = {
  label: string
  isChecked?: boolean
}

export type SegmentedControlProps = {
  segmentItems: SegmentItem[]
  name: string
  defaultItem?: SegmentItem
  onSelect: (segment: SegmentItem) => void
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({
  segmentItems,
  defaultItem = segmentItems[0],
  onSelect,
  name
}) => {
  const [selectedItem, setSelectedItem] = useState<SegmentItem>(defaultItem)

  const handleSelect = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault
    const selectedValue = event.target.value
    setSelectedItem({ label: selectedValue })
    onSelect({ label: selectedValue })
  }

  return (
    <StyledSegmentedControl>
      {segmentItems.map((segment: SegmentItem, index: number) => (
        <SegmentContainer key={index}>
          <SegmentLabel
            htmlFor={segment.label}
            checked={
              selectedItem !== undefined && selectedItem.label === segment.label
            }
          >
            <span> {segment.label} </span>
            <SegmentInput
              type="radio"
              id={segment.label}
              name={name}
              value={segment.label}
              onChange={handleSelect}
            />
          </SegmentLabel>
        </SegmentContainer>
      ))}
    </StyledSegmentedControl>
  )
}

export default SegmentedControl
