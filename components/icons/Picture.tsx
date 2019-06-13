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
export default class SvgPicture extends PureComponent<IconsProps, {}> {
  render() {
    const props = this.props
    const { size, fill, color, currentColor } = props
    return (
      <svg
        viewBox="0 0 34 28"
        preserveAspectRatio="xMidYMid meet"
        fontSize={size == null ? 32 : size}
        fill={fill == null ? 'currentColor' : fill}
        style={style}
        color={color}
      >
        <g fill="none" fillRule="evenodd">
          <path
            stroke={currentColor ? currentColor : '#4E4E4E'}
            strokeWidth={2.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.067 26.368h29.777V2H2.067z"
          />
          <path
            d="M32.708 25.742L25.155 15.33a1.07 1.07 0 0 0-.828-.44 1.018 1.018 0 0 0-.855.385l-4.016 4.83-6.108-8.3a1.068 1.068 0 0 0-.856-.433c-.364-.042-.657.157-.858.427L1.214 25.73a1.068 1.068 0 0 0 .853 1.706h29.777a1.068 1.068 0 0 0 .864-1.693M26.161 8.378a2.814 2.814 0 1 1-5.516 1.117 2.814 2.814 0 0 1 5.516-1.117"
            fill={currentColor ? currentColor : '#4E4E4E'}
          />
        </g>
      </svg>
    )
  }
}
