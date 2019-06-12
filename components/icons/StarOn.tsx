import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgStarOn = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 36 34"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <path
        d="M25.482 21.062l7.129-7.305-10.06-1.72L17.804 3l-4.744 9.037L3 13.757l7.128 7.305-1.473 10.1 9.15-4.522 9.15 4.522z"
        fill="#4E4E4E"
        stroke="#4E4E4E"
        strokeWidth={2.6}
        fillRule="evenodd"
      />
    </svg>
  )
}
