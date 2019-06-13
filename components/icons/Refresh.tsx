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
export default class SvgRefresh extends PureComponent<IconsProps, {}> {
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
        <g
          stroke={currentColor ? currentColor : '#4E4E4E'}
          strokeWidth={2.6}
          fill="none"
          fillRule="evenodd"
        >
          <path d="M3.318 21.408c1.856 6.24 7.628 10.795 14.47 10.795 6.842 0 12.613-4.555 14.469-10.795M32.257 12.794C30.4 6.554 24.63 2 17.787 2 10.948 2 5.175 6.554 3.319 12.794" />
          <path d="M2 7.571v5.223h5.596M33.944 26.63v-5.222h-5.596" />
        </g>
      </svg>
    )
  }
}
