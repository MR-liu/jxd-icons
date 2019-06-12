import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgEdit = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 34 34"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <g stroke="#4E4E4E" strokeWidth={2.6} fill="none" fillRule="evenodd">
        <path d="M1.143 32.21h32M8.915 25.297l-6.773 2.119.734-7.057L17.773 2.143l6.039 4.939zM2.876 20.358l6.039 4.938M14.413 6.253l6.037 4.938" />
      </g>
    </svg>
  )
}
