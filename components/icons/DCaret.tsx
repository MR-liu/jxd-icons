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
export default class SvgDCaret extends PureComponent<IconsProps, {}> {
  render() {
    const props = this.props
    const { size, fill, color, currentColor } = props
    return (
      <svg
        viewBox="0 0 15 21"
        preserveAspectRatio="xMidYMid meet"
        fontSize={size == null ? 32 : size}
        fill={fill == null ? 'currentColor' : fill}
        style={style}
        color={color}
      >
        <g fill={currentColor ? currentColor : '#4E4E4E'} fillRule="evenodd">
          <path d="M.278 6.535L5.998.667A1.472 1.472 0 0 1 8.095.656l5.848 5.872c.611.613.176 1.658-.69 1.658H.975c-.86 0-1.296-1.035-.696-1.651M.278 14.04l5.72 5.867c.572.59 1.518.594 2.098.011l5.848-5.871c.611-.614.176-1.659-.69-1.659H.975c-.86 0-1.296 1.035-.696 1.651" />
        </g>
      </svg>
    )
  }
}
