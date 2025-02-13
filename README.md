# UI Toolkit

A comprehensive UI component library for web3 applications, built with React, Radix UI, and Tailwind CSS.

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

## Usage

### Components

```tsx
import { Button, Input } from '@mento-protocol/ui-toolkit';
```

### Tailwind Configuration

To use the Mento UI Toolkit's Tailwind configuration in your project:

```js
// tailwind.config.js
import { tailwindConfig } from '@mento-protocol/ui-toolkit';

/** @type {import('tailwindcss').Config} */
export default {
  // Extend the base configuration
  presets: [tailwindConfig],
  // Add your custom configuration
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // Include the UI toolkit components
    './node_modules/@mento-protocol/ui-toolkit/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // Your custom theme extensions
    }
  }
};
```

This will give you access to all the Mento UI Toolkit's design tokens, colors, and utilities.

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