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
export default class SvgInsurance extends PureComponent<IconsProps, {}> {
  render() {
    const props = this.props
    const { size, fill, color, currentColor } = props
    return (
      <svg
        viewBox="0 0 32 39"
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
          <path
            d="M27.051 30.667l-9.024 6.101a3.663 3.663 0 0 1-4.054 0l-9.024-6.1C3.095 29.413 2 27.421 2 25.301V6.475L16 2l14 4.475v18.827c0 2.12-1.095 4.112-2.949 5.365z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M9 19.141l4.186 4.336L23 14" />
        </g>
      </svg>
    )
  }
}
