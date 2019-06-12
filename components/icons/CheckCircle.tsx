import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgCheckCircle = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 37 37"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <g strokeWidth={2.6} fill="none" fillRule="evenodd">
        <path
          d="M35 18.5C35 27.613 27.613 35 18.5 35S2 27.613 2 18.5 9.387 2 18.5 2 35 9.387 35 18.5z"
          stroke="#4E4E4E"
          fill="#4E4E4E"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path stroke="#FFF" d="M11 18.433l4.423 4.58L25.795 13" />
      </g>
    </svg>
  )
}
