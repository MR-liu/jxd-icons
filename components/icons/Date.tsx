import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgDate = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 35 33"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <g stroke="#4E4E4E" strokeWidth={2.6} fill="none" fillRule="evenodd">
        <path d="M28.387 30.87H6.363A4.363 4.363 0 0 1 2 26.506V7.864a4.363 4.363 0 0 1 4.363-4.363h22.024a4.363 4.363 0 0 1 4.363 4.363v18.642a4.363 4.363 0 0 1-4.363 4.364zM2 11.819h30.75M10.161 0v7.143M24.59 0v7.143" />
      </g>
    </svg>
  )
}
