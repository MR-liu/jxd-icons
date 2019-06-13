function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] })
  return typeScriptTpl.ast`
    import React, { PureComponent } from 'react'
    export interface IconsProps {
      className?: string;
      size?: string | number;
      fill?: string;
      color?: string;
      currentColor?: string;
      onClick?: React.MouseEventHandler<SVGSVGElement>;
    }
    const style = {
      display: 'block',
      flex: '0 0 auto',
      cursor: 'pointer'
    }
    export default class ${componentName} extends PureComponent<IconsProps, {}> {
      render() {
        const props = this.props
        const { size, fill, color, currentColor } = props
        return ${jsx}
      }
    }
  `
}
module.exports = {
  template,
  icon: true,
  expandProps: false,
  svgProps: {
    preserveAspectRatio: `xMidYMid meet`,
    fontSize: `{size == null ? 32 : size}`,
    fill: `{fill == null ? "currentColor" : fill}`,
    style: '{style}',
    color: '{color}',
  },
}
