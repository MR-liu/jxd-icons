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
export default class SvgSearch extends PureComponent<IconsProps, {}> {
  render() {
    const props = this.props
    const { size, fill, color, currentColor } = props
    return (
      <svg
        viewBox="0 0 36 36"
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
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M34.045 30.935l-3.1 3.1-7.957-7.958 3.15-3.049z" />
          <path d="M15.146 1.96c7.281 0 13.185 5.904 13.185 13.186 0 7.283-5.904 13.185-13.185 13.185-7.283 0-13.187-5.902-13.187-13.185C1.96 7.864 7.865 1.96 15.146 1.96z" />
        </g>
      </svg>
    )
  }
}
