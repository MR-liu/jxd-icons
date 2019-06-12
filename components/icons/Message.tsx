import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgMessage = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 32 27"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <g stroke="#4E4E4E" strokeWidth={2.6} fill="none" fillRule="evenodd">
        <path d="M27.917 24.846H4a2 2 0 0 1-1.999-2V4a2 2 0 0 1 2-2h23.917a2 2 0 0 1 2 2v18.846a2 2 0 0 1-2 2z" />
        <path d="M2 7.605l13.958 5.818 13.958-5.818" />
      </g>
    </svg>
  )
}
