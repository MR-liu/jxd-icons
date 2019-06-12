import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgNext = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 32 27"
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
        <path d="M18.145 1l12.52 12.468-12.52 12.202M30.665 13.468H0" />
      </g>
    </svg>
  )
}
