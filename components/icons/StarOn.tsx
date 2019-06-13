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
export default class SvgStarOn extends PureComponent<IconsProps, {}> {
  render() {
    const props = this.props
    const { size, fill, color, currentColor } = props
    return (
      <svg
        viewBox="0 0 36 34"
        preserveAspectRatio="xMidYMid meet"
        fontSize={size == null ? 32 : size}
        fill={fill == null ? 'currentColor' : fill}
        style={style}
        color={color}
      >
        <path
          d="M25.482 21.062l7.129-7.305-10.06-1.72L17.804 3l-4.744 9.037L3 13.757l7.128 7.305-1.473 10.1 9.15-4.522 9.15 4.522z"
          fill={currentColor ? currentColor : '#4E4E4E'}
          stroke={currentColor ? currentColor : '#4E4E4E'}
          strokeWidth={2.6}
          fillRule="evenodd"
        />
      </svg>
    )
  }
}
