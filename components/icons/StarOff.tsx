import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgStarOff = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 36 34"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <path
        d="M25.482 21.45l7.129-7.304-10.06-1.72-4.746-9.037-4.744 9.037L3 14.146l7.128 7.304-1.473 10.1 9.15-4.521 9.15 4.522z"
        stroke="#4E4E4E"
        strokeWidth={2.6}
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  )
}
