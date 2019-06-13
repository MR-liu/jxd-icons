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
export default class SvgExclamationCircle extends PureComponent<
  IconsProps,
  {}
> {
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
        <g fill="none" fillRule="evenodd">
          <path
            d="M35 18.5C35 27.613 27.613 35 18.5 35S2 27.613 2 18.5 9.387 2 18.5 2 35 9.387 35 18.5z"
            stroke={currentColor ? currentColor : '#4E4E4E'}
            strokeWidth={2.6}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g fill={currentColor ? currentColor : '#4E4E4E'}>
            <path d="M18.103 23.207c-.61 0-1.103-.494-1.103-1.104v-12a1.103 1.103 0 1 1 2.207 0v12c0 .61-.493 1.104-1.104 1.104M18.103 27.209c-.143 0-.286-.033-.419-.088A1.108 1.108 0 0 1 17 26.106c0-.298.12-.574.32-.784.11-.1.22-.187.364-.243a1.126 1.126 0 0 1 1.203.243c.199.21.32.486.32.784 0 .143-.033.286-.088.419a1.09 1.09 0 0 1-.232.353c-.21.21-.497.331-.784.331" />
          </g>
        </g>
      </svg>
    )
  }
}
