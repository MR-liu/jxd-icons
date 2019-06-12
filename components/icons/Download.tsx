import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgDownload = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 21 31"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <g stroke="#4E4E4E" strokeWidth={2.6} fill="none" fillRule="evenodd">
        <path d="M0 29.193h20.483M10.24 23.9V.104M17.142 18.071l-7.07 7.071L3 18.072" />
      </g>
    </svg>
  )
}
