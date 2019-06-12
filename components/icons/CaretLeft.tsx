import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgCaretLeft = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 14 25"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <path
        d="M11.097 24.512L.781 14.464a2.592 2.592 0 0 1-.02-3.689L11.082.502C12.161-.572 14 .191 14 1.712V23.29c0 1.51-1.82 2.276-2.903 1.222"
        fill="#4E4E4E"
        fillRule="evenodd"
      />
    </svg>
  )
}
