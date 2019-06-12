import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgArrowDown = ({ size, fill, ...props }: Props) => {
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
        <path d="M26 18.145l-12.468 12.52L1.33 18.145M13.532 30.665V0" />
      </g>
    </svg>
  )
}
