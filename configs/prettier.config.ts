import type { Config } from 'prettier'

const prettierConfig: Config = {
  semi: true,
  singleQuote: false,
  trailingComma: 'es5',
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'auto',
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['clsx', 'cva', 'cn'],
}

export default prettierConfig 