const { promisify } = require('util')
const fs = require('fs')
const path = require('path')
const prettier = require('prettier')

const readdirAsync = promisify(fs.readdir)
const writeFileAsync = promisify(fs.writeFile)

const sourceDir = path.resolve(__dirname, './icons')
const targetFile = path.resolve(__dirname, './index.tsx')

async function readConfig() {
  const filenames = await readdirAsync(sourceDir)
  const result = [];

  for (const filename of filenames) {
    const basename = path.basename(filename, '.tsx');
    const item = {};
    item[basename] = () => require(`components/icons/${basename}`);

    if (basename !== '.DS_Store') {
      result.push(`export { default as Svg${basename} } from './icons/${basename}'`)  
    }
  }

  return result;
}

async function boot() {
  const config = await readConfig()

  const text = config.join('\n')

  const options = await prettier.resolveConfig(path.resolve(__dirname, '.prettierrc'))

  const formatted = prettier.format(text, { ...options, parser: "babel" });

  await writeFileAsync(targetFile, formatted, 'utf-8')

  console.log('export svg content -->', config)
}

boot()