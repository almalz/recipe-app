import { useEffect, MutableRefObject } from 'react'

const useOutsideClick = (
  ref: MutableRefObject<HTMLElement | undefined>,
  callback: () => void
) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

export default useOutsideClick
