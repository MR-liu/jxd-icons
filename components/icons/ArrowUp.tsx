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
export default class SvgArrowUp extends PureComponent<IconsProps, {}> {
  render() {
    const props = this.props
    const { size, fill, color, currentColor } = props
    return (
      <svg
        viewBox="0 0 27 32"
        preserveAspectRatio="xMidYMid meet"
        fontSize={size == null ? 32 : size}
        fill={fill == null ? 'currentColor' : fill}
        style={style}
        color={color}
      >
        <g
          stroke={currentColor ? currentColor : '#4E4E4E'}
          strokeWidth={2.6}
          fill="none"
          fillRule="evenodd"
          strokeLinejoin="round"
        >
          <path d="M1 13.855l12.468-12.52 12.202 12.52M13.468 1.335V32" />
        </g>
      </svg>
    )
  }
}
