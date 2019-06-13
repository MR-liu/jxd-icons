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
export default class SvgTime extends PureComponent<IconsProps, {}> {
  render() {
    const props = this.props
    const { size, fill, color, currentColor } = props
    return (
      <svg
        viewBox="0 0 35 35"
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
        >
          <path d="M33.244 17.623c0 8.628-6.993 15.623-15.622 15.623C8.994 33.246 2 26.25 2 17.623 2 8.994 8.994 2 17.622 2c8.629 0 15.622 6.994 15.622 15.623z" />
          <path d="M17.623 6.777v10.846l-4.099 3.138" />
        </g>
      </svg>
    )
  }
}
