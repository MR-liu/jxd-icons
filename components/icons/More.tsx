import * as React from 'react'
type Props = {
  size?: string | number
  fill?: string
}
const style = {
  display: 'block',
  flex: '0 0 auto'
}
export const SvgMore = ({ size, fill, ...props }: Props) => {
  return (
    <svg
      viewBox="0 0 20 5"
      preserveAspectRatio="xMidYMid meet"
      fontSize={size == null ? 32 : size}
      fill={fill == null ? 'currentColor' : fill}
      style={style}
    >
      <defs>
        <path id="More_svg__a" d="M5.087 4.8H.56V.183h4.527z" />
        <path id="More_svg__c" d="M0 .183V4.8h4.526V.183z" />
        <path id="More_svg__e" d="M4.647.183V4.8H.12V.183h4.527z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(7.059 .017)">
          <mask id="More_svg__b" fill="#fff">
            <use xlinkHref="#More_svg__a" />
          </mask>
          <path
            d="M2.824.183C1.575.183.56 1.218.56 2.492.56 3.765 1.575 4.8 2.824 4.8c1.248 0 2.263-1.035 2.263-2.308 0-1.274-1.015-2.31-2.263-2.31"
            fill="#4E4E4E"
            mask="url(#More_svg__b)"
          />
        </g>
        <g transform="translate(0 .017)">
          <mask id="More_svg__d" fill="#fff">
            <use xlinkHref="#More_svg__c" />
          </mask>
          <path
            d="M2.263.183C1.015.183-.001 1.218-.001 2.492 0 3.765 1.015 4.8 2.263 4.8c1.248 0 2.263-1.035 2.263-2.308 0-1.274-1.015-2.31-2.263-2.31"
            fill="#4E4E4E"
            mask="url(#More_svg__d)"
          />
        </g>
        <g transform="translate(15.118 .017)">
          <mask id="More_svg__f" fill="#fff">
            <use xlinkHref="#More_svg__e" />
          </mask>
          <path
            d="M2.384.183C1.134.183.12 1.218.12 2.492.12 3.765 1.135 4.8 2.384 4.8c1.248 0 2.264-1.035 2.264-2.308 0-1.274-1.016-2.31-2.264-2.31"
            fill="#4E4E4E"
            mask="url(#More_svg__f)"
          />
        </g>
      </g>
    </svg>
  )
}
