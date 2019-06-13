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
export default class SvgLocation extends PureComponent<IconsProps, {}> {
  render() {
    const props = this.props
    const { size, fill, color, currentColor } = props
    return (
      <svg
        viewBox="0 0 27 36"
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
          <path d="M13.376 2C7.094 2 2 6.778 2 12.672c0 5.552 2.696 11.47 7.578 16.596l3.797 3.987 3.795-3.987c4.882-5.125 7.58-11.044 7.58-16.596C24.75 6.778 19.656 2 13.375 2z" />
          <path d="M17.868 13.73a4.494 4.494 0 1 1-8.987 0 4.494 4.494 0 0 1 8.987 0z" />
        </g>
      </svg>
    )
  }
}
