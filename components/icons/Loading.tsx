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
export default class SvgLoading extends PureComponent<IconsProps, {}> {
  render() {
    const props = this.props
    const { size, fill, color, currentColor } = props
    return (
      <svg
        viewBox="0 0 31 32"
        preserveAspectRatio="xMidYMid meet"
        fontSize={size == null ? 32 : size}
        fill={fill == null ? 'currentColor' : fill}
        style={style}
        color={color}
      >
        <g fill={currentColor ? currentColor : '#4E4E4E'} fillRule="evenodd">
          <path d="M15.013 3.847a2.518 2.518 0 1 0-4.277-2.659 2.518 2.518 0 0 0 4.277 2.659M9.79 5.422a2.379 2.379 0 1 0-4.72-.597 2.379 2.379 0 0 0 4.72.597M5.842 8.965a2.239 2.239 0 1 0-4.295 1.265 2.239 2.239 0 0 0 4.295-1.265M3.701 13.885a2.099 2.099 0 1 0-3.204 2.711A2.099 2.099 0 0 0 3.7 13.885M3.888 19.508a1.96 1.96 0 1 0-1.66 3.553 1.96 1.96 0 0 0 1.66-3.553M6.395 24.385a1.822 1.822 0 1 0-.063 3.643 1.822 1.822 0 0 0 .063-3.643M10.669 27.72a1.683 1.683 0 1 0 1.277 3.115 1.683 1.683 0 0 0-1.277-3.115M16.07 28.992a1.544 1.544 0 1 0 2.228 2.14 1.544 1.544 0 0 0-2.227-2.14M21.702 27.774a1.404 1.404 0 1 0 2.648.943 1.405 1.405 0 0 0-2.648-.943M26.115 24.395a1.268 1.268 0 1 0 2.531-.157 1.268 1.268 0 0 0-2.531.157M28.723 19.483a1.13 1.13 0 1 0 2.029-.998 1.13 1.13 0 0 0-2.03.998M29.016 13.706a.995.995 0 1 0 0 0" />
        </g>
      </svg>
    )
  }
}
