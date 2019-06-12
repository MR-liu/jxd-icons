import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgMoreOutline = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 23 7"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <g
        stroke="#4E4E4E"
        strokeWidth={2}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM6 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zM22 3.5a2.5 2.5 0 1 1-4.999.001A2.5 2.5 0 0 1 22 3.5z" />
      </g>
    </svg>
  )
}
