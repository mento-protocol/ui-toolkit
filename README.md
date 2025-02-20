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
    'postcss-import': {},
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
} satisfies Config;
```

3. **Import Styles** (app/globals.css or styles/globals.css):
```css
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

### Usage Example

```tsx
import { Button } from '@mento-protocol/ui-toolkit';

export default function MyComponent() {
  return (
    <Button variant="primary">
      Click Me
    </Button>
  );
}
```

### Troubleshooting

If you encounter style-related issues:

1. Verify your PostCSS configuration includes `postcss-import`
2. Ensure the Tailwind content paths include the UI toolkit's dist directory
3. Check that styles are imported before Tailwind directives
4. Clear your Next.js cache if needed:
   ```bash
   rm -rf .next
   rm -rf node_modules/.cache
   ```

For more detailed debugging steps, see [CSS-IMPORT-DEBUG.md](./CSS-IMPORT-DEBUG.md).

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

1. Install dependencies:

```bash
pnpm install
```

2. Start development server:

```bash
pnpm dev
```

3. Build the library:

```bash
pnpm build
```

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

## Usage

### Basic Component Usage

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