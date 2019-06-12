import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgArrowUp = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 27 32"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <g
        stroke="#4E4E4E"
        strokeWidth={2.6}
        fill="none"
        fillRule="evenodd"
        strokeLinejoin="round"
      >
        <path d="M1 13.855l12.468-12.52 12.202 12.52M13.468 1.335V32" />
      </g>
    </svg>
  )
}
