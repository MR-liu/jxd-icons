import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgUp = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 32 18"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <path
        d="M1 17L16.161 2 31 17"
        stroke="#4E4E4E"
        strokeWidth={2.6}
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  )
}
