// svgr --no-dimensions --ext tsx --config-file svgr.config.js -d  ./src  ./assets
function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] })
  return typeScriptTpl.ast`
    import * as React from 'react';
    type Props = {
      size?: string | number,
      fill?: string
    };
    const style = {
      display: "block",
      flex: "0 0 auto",
    };
    export const ${componentName} = ({ size, fill, ...props }: Props) => {
      return (
        ${jsx}
      );
    };
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
  },
}
