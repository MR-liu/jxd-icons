import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgRemove = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <path
        d="M26.465 17.117H5.814a1.116 1.116 0 1 1 0-2.232h20.651a1.116 1.116 0 1 1 0 2.232M16 .001c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16"
        fill="#4E4E4E"
        fillRule="evenodd"
      />
    </svg>
  )
}
