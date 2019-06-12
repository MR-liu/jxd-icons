import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgCaretRight = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 14 25"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <path
        d="M2.903 24.512l10.316-10.048a2.592 2.592 0 0 0 .02-3.689L2.918.502C1.839-.572 0 .191 0 1.712V23.29c0 1.51 1.82 2.276 2.903 1.222"
        fill="#4E4E4E"
        fillRule="evenodd"
      />
    </svg>
  )
}
