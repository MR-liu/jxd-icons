import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgRightCircle = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 36 36"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <g
        transform="rotate(90 16 18)"
        stroke="#4E4E4E"
        strokeWidth={2.6}
        fill="none"
        fillRule="evenodd"
      >
        <circle cx={16} cy={16} r={16} />
        <path d="M10.088 18.912l5.976-6 5.848 6" />
      </g>
    </svg>
  )
}
