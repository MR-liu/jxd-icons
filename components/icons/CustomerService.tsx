import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgCustomerService = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 35 33"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <g stroke="#4E4E4E" strokeWidth={2.6} fill="none" fillRule="evenodd">
        <path d="M8.556 14.303c0-1.266-1.28-2.195-2.451-1.715a6.456 6.456 0 0 0 0 11.943c1.172.48 2.45-.448 2.45-1.715v-8.513zM26.446 14.303c0-1.266 1.279-2.195 2.45-1.715a6.456 6.456 0 0 1 0 11.943c-1.171.48-2.45-.448-2.45-1.715v-8.513zM6.783 11.869C6.783 6.419 11.201 2 16.651 2h1.698c5.451 0 9.87 4.418 9.87 9.868M28.218 25.064c0 2.32-1.88 4.202-4.2 4.202h-4.1" />
        <path d="M17.728 31.455h-3.482a2.19 2.19 0 0 1 0-4.38h3.482a2.19 2.19 0 1 1 0 4.38z" />
      </g>
    </svg>
  )
}
