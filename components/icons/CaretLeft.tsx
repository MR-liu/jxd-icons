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
export default class SvgCaretLeft extends PureComponent<IconsProps, {}> {
  render() {
    const props = this.props
    const { size, fill, color, currentColor } = props
    return (
      <svg
        viewBox="0 0 14 25"
        preserveAspectRatio="xMidYMid meet"
        fontSize={size == null ? 32 : size}
        fill={fill == null ? 'currentColor' : fill}
        style={style}
        color={color}
      >
        <path
          d="M11.097 24.512L.781 14.464a2.592 2.592 0 0 1-.02-3.689L11.082.502C12.161-.572 14 .191 14 1.712V23.29c0 1.51-1.82 2.276-2.903 1.222"
          fill={currentColor ? currentColor : '#4E4E4E'}
          fillRule="evenodd"
        />
      </svg>
    )
  }
}
