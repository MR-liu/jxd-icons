import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgVerticalLeft = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 21 37"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <g stroke="#4E4E4E" strokeWidth={2.6} fill="none" fillRule="evenodd">
        <path d="M1.736 3.726l14.99 14.929-14.99 14.609z" />
        <path d="M19.5 3.508v30.699" strokeLinecap="square" />
      </g>
    </svg>
  )
}
