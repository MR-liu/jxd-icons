import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgArrowLeft = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 34 33"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <g stroke="#4E4E4E" strokeWidth={2.6} fill="none" fillRule="evenodd">
        <path d="M17.264 1.726L2.274 16.655l14.99 14.609M32.264 1.726l-14.99 14.929 14.99 14.609" />
      </g>
    </svg>
  )
}
