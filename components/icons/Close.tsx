import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgClose = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 26 26"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <g stroke="#4E4E4E" strokeWidth={2.6} fill="none" fillRule="evenodd">
        <path d="M1 1l23.884 23.884M24.884 1L1 24.884" />
      </g>
    </svg>
  )
}
