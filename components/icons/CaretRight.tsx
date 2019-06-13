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
export default class SvgCaretRight extends PureComponent<IconsProps, {}> {
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
          d="M2.903 24.512l10.316-10.048a2.592 2.592 0 0 0 .02-3.689L2.918.502C1.839-.572 0 .191 0 1.712V23.29c0 1.51 1.82 2.276 2.903 1.222"
          fill={currentColor ? currentColor : '#4E4E4E'}
          fillRule="evenodd"
        />
      </svg>
    )
  }
}
