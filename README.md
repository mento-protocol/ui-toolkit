# Mento Protocol UI Toolkit

A comprehensive UI toolkit for building Mento Protocol applications.

## Overview

This library provides standardized UI components, theming, and utilities shared across web3 applications. It includes:

- Accessible UI Components (powered by Radix UI)
- Dark/Light Theme System
- Web3 Components & Integrations (Wagmi, RainbowKit)
- Responsive Layout Components
- Form Components & Validation
- Common Utilities

## Components Under Development

The following components are currently under development and not available in the public API:

- **Markdown Editor**: A WYSIWYG markdown editor component is being developed but is currently disabled due to styling and SSR compatibility issues.

## Installation

```bash
pnpm add @mento-protocol/ui-toolkit
```

### Required Dependencies

```bash
# Core dependencies
pnpm add postcss-import tailwindcss @tailwindcss/typography tailwindcss-animate

# Peer dependencies (install as needed)
pnpm add @rainbow-me/rainbowkit@^2.0.0 \
  @tanstack/react-query@^5.0.0 \
  date-fns@^2.30.0 \
  framer-motion@^11.0.0 \
  next-themes@^0.4.0 \
  viem@^2.0.0 \
  wagmi@^2.0.0
```

### Configuration Steps

1. **Configure PostCSS** (postcss.config.js):
```javascript
module.exports = {
  plugins: {
    'postcss-import': {},  // Must be first
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

2. **Configure Tailwind** (tailwind.config.ts):
```typescript
import type { Config } from 'tailwindcss';
import { tailwindConfig } from "@mento-protocol/ui-toolkit";

export default {
  presets: [tailwindConfig],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@mento-protocol/ui-toolkit/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // Only extend theme if you need additional styles
  theme: {
    extend: {
      // Your custom extensions
    }
  }
} satisfies Config;
```

3. **Import Styles** (app/globals.css or styles/globals.css):
```css
/* UI Toolkit styles must come before Tailwind directives */
@import "@mento-protocol/ui-toolkit/dist/styles/index.css";

@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. **Configure Next.js** (next.config.mjs):
```javascript
/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ['@mento-protocol/ui-toolkit'],
};

export default config;
```

5. **Configure Fonts** (app/layout.tsx):
```typescript
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.variable} w-full overscroll-none`}>
      {children}
    </html>
  );
}
```

## Troubleshooting Guide

### Common Issues

1. **Styles Not Applying**
   - Clear Next.js and module caches:
     ```bash
     rm -rf .next
     rm -rf node_modules/.cache
     ```
   - Verify style import order in globals.css
   - Check Tailwind content paths include toolkit components

2. **Font Issues**
   - Ensure font variables are properly set:
     ```typescript
     // Must match these names
     variable: "--font-inter"  // For Inter font
     variable: "--font-fg"     // For fallback font
     ```
   - Verify font classes are applied to html/body
   - Check font preload settings in Next.js config

3. **Arbitrary Values Missing**
   - Verify toolkit's Tailwind preset is first in presets array
   - Check for style conflicts in theme extensions
   - Enable debug output to trace class generation:
     ```bash
     DEBUG=tailwindcss:* pnpm dev
     ```

4. **Dark Mode Issues**
   - Ensure ThemeProvider is properly configured
   - Check dark mode classes in Tailwind config
   - Verify dark variants in component styles

5. **TypeScript Compatibility Issues**
   - Some third-party dependencies (e.g., react-copy-to-clipboard) may have type compatibility issues with React 18
   - Use `@ts-expect-error` comments with descriptive messages when necessary
   - Note that TypeScript checking is excluded from CI to prevent environment-specific type resolution issues
   - For local development, consider creating type declaration files (*.d.ts) to augment problematic dependencies

### Development Workflow

1. **Local Development**
   ```bash
   # In ui-toolkit directory
   pnpm link --global
   pnpm build --watch

   # In consuming app
   pnpm link --global @mento-protocol/ui-toolkit
   ```

2. **Style Updates**
   - Rebuild toolkit after style changes
   - Clear consuming app caches
   - Verify style inheritance in browser dev tools

3. **Debug Commands**
   ```bash
   # Watch Tailwind processing
   DEBUG=tailwindcss:* pnpm dev

   # Check PostCSS processing
   DEBUG=postcss:* pnpm dev

   # Verify component styles
   DEBUG=*:(tailwind|postcss)* pnpm dev
   ```

### Best Practices

1. **Theme Extension**
   - Extend rather than override theme values
   - Use semantic color names for consistency
   - Keep custom styles separate from toolkit styles

2. **Style Verification**
   ```bash
   # 1. Clear caches
   rm -rf .next node_modules/.cache

   # 2. Rebuild with debug output
   DEBUG=tailwindcss:* pnpm dev

   # 3. Verify in browser
   - Check font loading
   - Verify arbitrary values
   - Confirm component styling
   ```

3. **Cache Management**
   - Clear caches when:
     - Updating toolkit version
     - Making theme changes
     - Experiencing style inconsistencies
   - Use watch mode during development

4. **Integration Testing**
   - Test components in light/dark modes
   - Verify responsive behaviors
   - Check font loading performance
   - Validate arbitrary value rendering

For more detailed debugging steps:
- [CSS Import Debug Guide](./CSS-IMPORT-DEBUG.md)
- [Component Styles Debug Guide](./COMPONENT-STYLES-DEBUG.md)
- [Arbitrary Values Guide](./ARBITRARY-VALUES-PR.md)

## Usage

### Basic Components

```tsx
import { Button, Input, Card } from '@mento-protocol/ui-toolkit';

export default function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text..." />
      <Button>Click me</Button>
    </Card>
  );
}
```

### Web3 Components

```tsx
import { WalletConnect, NetworkSelector } from '@mento-protocol/ui-toolkit';

export default function Web3Component() {
  return (
    <div>
      <WalletConnect />
      <NetworkSelector />
    </div>
  );
}
```

### Theme Provider

To enable dark mode support, wrap your application with the theme provider:

```tsx
import { ThemeProvider } from '@mento-protocol/ui-toolkit';

export default function App({ children }) {
  return (
    <ThemeProvider defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
```

## Development

### Setup

1. Clone the repository
2. Install dependencies:
```bash
pnpm install
```
3. Start development server:
```bash
pnpm dev
```
4. Build the library:
```bash
pnpm build
```

### Code Quality Tools

#### ESLint

The project uses ESLint for code quality enforcement with a modern flat configuration format (recommended for ESLint v8.21.0+). The configuration is structured in two parts:

1. **Shareable Configuration** (`configs/eslint.config.ts`):
   - Exported as part of the package for consumers
   - Implements the flat config format with TypeScript
   - Provides base rules for React, TypeScript, and Next.js
   - Includes a rule to disable `@typescript-eslint/prefer-ts-expect-error`, allowing the use of `@ts-ignore` when necessary

2. **Local Development Configuration** (`eslint.config.ts`):
   - Imports and extends the shareable configuration
   - Adds project-specific settings

To use the shareable configuration in your project:
```javascript
// eslint.config.js
import { eslintConfig } from '@mento-protocol/ui-toolkit/configs';

export default eslintConfig;

// For customization:
// import { createESLintConfig } from '@mento-protocol/ui-toolkit/configs';
// export default createESLintConfig({ 
//   ignorePatterns: ['your-patterns-here'] 
// });
```

To lint your code:
```bash
# Check for issues
pnpm lint

# Fix automatically fixable issues
pnpm lint:fix
```

#### TypeScript

Type checking is enforced with TypeScript during local development:
```bash
pnpm typecheck
```

Note: TypeScript type checking is intentionally excluded from the CI workflow to prevent issues with dependency resolution differences between environments. Use typechecking locally to catch type errors before committing changes.

#### Formatting

Code formatting is handled by Prettier:
```bash
pnpm format
```

## Releasing & Publishing

This project uses [Changesets](https://github.com/changesets/changesets) for version management and has an automated GitHub Action for publishing to NPM.

### Creating a Release

1. Create changesets for your modifications:
   ```bash
   pnpm changeset
   ```
   Follow the prompts to select the type of version change and write a description.

2. Commit the generated changeset file with your changes:
   ```bash
   git add .changeset/
   git commit -m "chore: add changeset for new feature"
   ```

3. Push your changes and create a pull request to the main branch.

### Automated Publishing

When changes are merged to the main branch, a GitHub Action automatically:

1. Builds and verifies the package
2. Processes any changesets to update versions
3. Publishes to NPM if there are version changes

For manual publishing or troubleshooting, see [.github/README.md](./.github/README.md).

## Project Structure

- `src/components/ui`: Base UI components
- `src/components/web3`: Web3 components and integrations
- `src/themes`: Theme configurations and providers
- `src/utils`: Shared utilities
- `src/app`: Component playground/documentation

## Contributing

1. Create a feature branch
2. Make your changes
3. Run tests and linting
4. Submit a PR

## Requirements

### Peer Dependencies
- React >=19.0.0
- Next.js >=15.1.2
- Tailwind CSS >=3.4.17

## Key Features

### Core Components
- Buttons (multiple variants)
- Forms & Inputs
- Cards & Containers
- Navigation (Header, Footer)
- Modals & Sheets
- Accordions & Dropdowns
- Data Display Components

### Web3 Integration
- Wallet Connection
- Network Switching
- Transaction Handling
- Address Display & Formatting

### Theme System
- Dark/Light Mode Support
- Customizable Color Schemes
- Consistent Typography
- Responsive Design Utilities

## Future Improvements

### Color System Enhancement

The current theme system uses HEX colors for simplicity and ease of adoption. A planned enhancement is to migrate to an HSL (Hue, Saturation, Lightness) color system, which would offer several advantages:

- **Dynamic Theme Generation**: Easier creation of light/dark themes by manipulating lightness values
- **Programmatic Color Manipulation**: Simple adjustments to create consistent color variations
- **Improved Accessibility**: Better control over contrast ratios through lightness values
- **Semantic Color Relationships**: Maintain color harmony through consistent hue values

This enhancement would require:
1. CSS variable system for HSL values
2. Migration guide for existing implementations
3. Theme generation utilities
4. Backwards compatibility layer

The migration would be implemented as a major version update to maintain compatibility with existing implementations.

## License

MIT