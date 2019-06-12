import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgPictureOutline = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 36 30"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <g stroke="#4E4E4E" strokeWidth={2.6} fill="none" fillRule="evenodd">
        <path d="M2 28.109h31.904V2H2z" />
        <path d="M2 28.109l11.166-14.926 7.41 10.069 5.236-6.298 8.092 11.155M27.228 8.953a2.417 2.417 0 1 1-4.737.96 2.417 2.417 0 0 1 4.737-.96z" />
      </g>
    </svg>
  )
}
