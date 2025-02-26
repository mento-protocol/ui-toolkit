import { defineConfig } from 'tsup'
import { readFile, writeFile, mkdir } from 'fs/promises'
import { resolve } from 'path'

export default defineConfig({
  entry: {
    'index': 'src/index.ts',
    'configs/index': 'configs/index.ts'
  },
  format: ['esm', 'cjs'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'next',
    'tailwindcss',
    '@rainbow-me/rainbowkit',
    'wagmi',
    '@headlessui/react',
    'framer-motion',
    'class-variance-authority',
    '@radix-ui/*',
  ],
  treeshake: true,
  outDir: 'dist',
  outExtension: ({ format }) => ({
    js: format === 'cjs' ? '.cjs' : '.mjs'
  }),
  async onSuccess() {
    // Ensure the styles directory exists
    await mkdir(resolve('dist/styles'), { recursive: true })
    
    // Copy styles
    const css = await readFile('src/styles/globals.css', 'utf-8')
    await writeFile('dist/styles/index.css', css)
    
    // Create a package.json for the configs directory
    const configPkg = {
      type: 'module',
      main: './index.cjs',
      module: './index.mjs',
      types: './index.d.ts'
    }
    await writeFile('dist/configs/package.json', JSON.stringify(configPkg, null, 2))
  }
}) 