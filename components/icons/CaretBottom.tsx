import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgCaretBottom = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 25 14"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <path
        d="M24.524 2.903L14.47 13.219a2.594 2.594 0 0 1-3.69.02L.501 2.918C-.572 1.839.191 0 1.712 0h21.59c1.51 0 2.277 1.82 1.222 2.903"
        fill="#4E4E4E"
        fillRule="evenodd"
      />
    </svg>
  )
}
