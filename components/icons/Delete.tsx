import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgDelete = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 30 33"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <g stroke="#4E4E4E" strokeWidth={2.6} fill="none" fillRule="evenodd">
        <path d="M24.065 12.4v14.752c0 2.232-1.81 4.04-4.042 4.04H9.424a4.04 4.04 0 0 1-4.04-4.04V12.4M.104 8.36h29.24M20.825 8.36V2.103H8.927V8.36h0M11.945 15.188v10M17.807 15.188v10" />
      </g>
    </svg>
  )
}
