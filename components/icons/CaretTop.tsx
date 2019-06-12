import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgCaretTop = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 25 14"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <path
        d="M.488 11.097L10.536.781a2.592 2.592 0 0 1 3.689-.02l10.273 10.321c1.074 1.079.311 2.918-1.21 2.918H1.71C.2 14-.566 12.18.488 11.097"
        fill="#4E4E4E"
        fillRule="evenodd"
      />
    </svg>
  )
}
