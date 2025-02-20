export { default as tailwindConfig } from './tailwind.config'
export { default as eslintConfig } from './eslint.config'
export { default as prettierConfig } from './prettier.config'

// Add type exports
export type { Config as TailwindConfig } from 'tailwindcss'
export type { Linter } from 'eslint'
export type { Config as PrettierConfig } from 'prettier' 