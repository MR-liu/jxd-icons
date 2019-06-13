import React, { PureComponent } from 'react'
export interface IconsProps {
  className?: string
  size?: string | number
  fill?: string
  color?: string
  currentColor?: string
  onClick?: React.MouseEventHandler<SVGSVGElement>
}
const style = {
  display: 'block',
  flex: '0 0 auto',
  cursor: 'pointer'
}
export default class SvgCaretTop extends PureComponent<IconsProps, {}> {
  render() {
    const props = this.props
    const { size, fill, color, currentColor } = props
    return (
      <svg
        viewBox="0 0 25 14"
        preserveAspectRatio="xMidYMid meet"
        fontSize={size == null ? 32 : size}
        fill={fill == null ? 'currentColor' : fill}
        style={style}
        color={color}
      >
        <path
          d="M.488 11.097L10.536.781a2.592 2.592 0 0 1 3.689-.02l10.273 10.321c1.074 1.079.311 2.918-1.21 2.918H1.71C.2 14-.566 12.18.488 11.097"
          fill={currentColor ? currentColor : '#4E4E4E'}
          fillRule="evenodd"
        />
      </svg>
    )
  }
}
