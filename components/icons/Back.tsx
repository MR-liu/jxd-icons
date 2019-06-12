import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgBack = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 33 27"
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
        <path d="M14.519 1L2.001 13.468 14.52 25.67M2 13.468h30.665" />
      </g>
    </svg>
  )
}
