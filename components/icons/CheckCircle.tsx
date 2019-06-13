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
export default class SvgCheckCircle extends PureComponent<IconsProps, {}> {
  render() {
    const props = this.props
    const { size, fill, color, currentColor } = props
    return (
      <svg
        viewBox="0 0 37 37"
        preserveAspectRatio="xMidYMid meet"
        fontSize={size == null ? 32 : size}
        fill={fill == null ? 'currentColor' : fill}
        style={style}
        color={color}
      >
        <g strokeWidth={2.6} fill="none" fillRule="evenodd">
          <path
            d="M35 18.5C35 27.613 27.613 35 18.5 35S2 27.613 2 18.5 9.387 2 18.5 2 35 9.387 35 18.5z"
            stroke={currentColor ? currentColor : '#4E4E4E'}
            fill={currentColor ? currentColor : '#4E4E4E'}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path stroke="#FFF" d="M11 18.433l4.423 4.58L25.795 13" />
        </g>
      </svg>
    )
  }
}
