# Mento Protocol UI Toolkit - Integration Guide

This guide provides detailed instructions for integrating the Mento Protocol UI Toolkit into your Next.js application.

## Prerequisites

- Next.js project (v13+)
- Node.js (v18+)
- Package manager (pnpm recommended, npm or yarn also supported)

## Installation

### 1. Install Core Package

```bash
# Using pnpm (recommended)
pnpm add @mento-protocol/ui-toolkit

# Using npm
npm install @mento-protocol/ui-toolkit

# Using yarn
yarn add @mento-protocol/ui-toolkit
```

### 2. Install Required Dependencies

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

## Configuration Steps

### 1. Configure PostCSS

Create or modify `postcss.config.js` at the root of your project:

```javascript
module.exports = {
  plugins: {
    'postcss-import': {},  // Must be first
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 2. Configure Tailwind

Create or modify `tailwind.config.ts` at the root of your project:

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

### 3. Import Styles

Update your global CSS file (e.g., `app/globals.css` or `styles/globals.css`):

```css
/* UI Toolkit styles must come before Tailwind directives */
@import "@mento-protocol/ui-toolkit/dist/styles/index.css";

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Your additional global styles */
```

### 4. Configure Next.js

Update `next.config.mjs` at the root of your project:

```javascript
/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ['@mento-protocol/ui-toolkit'],
};

export default config;
```

### 5. Configure Fonts

Update your root layout component (e.g., `app/layout.tsx`):

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
      <body>
        {children}
      </body>
    </html>
  );
}
```

### 6. Setup Theme Provider (Optional)

If you want to enable dark mode support, wrap your application with the ThemeProvider:

```typescript
// app/providers.tsx
'use client';

import { ThemeProvider } from '@mento-protocol/ui-toolkit';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem 
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

// Then in app/layout.tsx
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.variable} w-full overscroll-none`}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

### 7. Setup Web3 Providers (Optional)

If you're using the Web3 components (wallet connection, etc.):

```typescript
// app/web3-providers.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, createConfig } from 'wagmi';
import { celo, celoCico, celoAlfajores } from 'wagmi/chains';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { ReactNode } from 'react';

const queryClient = new QueryClient();

// Configure wagmi and rainbowkit
const config = createConfig(
  getDefaultConfig({
    appName: 'Your App Name',
    projectId: 'YOUR_WALLET_CONNECT_PROJECT_ID', // Get from WalletConnect Dashboard
    chains: [celo, celoCico, celoAlfajores],
    ssr: true,
  })
);

export function Web3Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

// Then in app/layout.tsx or app/providers.tsx
import { Web3Providers } from './web3-providers';

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <Web3Providers>
        {children}
      </Web3Providers>
    </ThemeProvider>
  );
}
```

## Usage Examples

### Basic Components

```tsx
import { Button, Input, Card } from '@mento-protocol/ui-toolkit';

export default function MyComponent() {
  return (
    <Card>
      <Card.Header>
        <h2 className="text-xl font-semibold">User Information</h2>
      </Card.Header>
      <Card.Content>
        <form className="space-y-4">
          <div>
            <label htmlFor="name">Name</label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
        </form>
      </Card.Content>
      <Card.Footer>
        <Button>Submit</Button>
      </Card.Footer>
    </Card>
  );
}
```

### Web3 Components

```tsx
import { 
  WalletConnect, 
  NetworkSelector, 
  BlockExplorerLink 
} from '@mento-protocol/ui-toolkit';

export default function Web3Example() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <WalletConnect />
        <NetworkSelector />
      </div>
      
      <p>Transaction: 
        <BlockExplorerLink 
          address="0x123...456" 
          type="transaction" 
          chainId={42220}
        >
          View on Explorer
        </BlockExplorerLink>
      </p>
    </div>
  );
}
```

### Theme-Aware Components

```tsx
import { Button, ThemeSwitch } from '@mento-protocol/ui-toolkit';

export default function ThemeExample() {
  return (
    <div className="p-4 dark:bg-gray-900">
      <div className="flex justify-end">
        <ThemeSwitch />
      </div>
      
      <h1 className="text-2xl dark:text-white">Theme Example</h1>
      
      <div className="mt-4 space-x-4">
        <Button theme="primary">Primary Button</Button>
        <Button theme="secondary">Secondary Button</Button>
        <Button theme="white">White Button</Button>
      </div>
    </div>
  );
}
```

## Troubleshooting

### Styles Not Applying

If your components don't appear styled correctly:

1. Verify your import order in globals.css
   ```css
   /* Must come before Tailwind directives */
   @import "@mento-protocol/ui-toolkit/dist/styles/index.css";
   
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. Clear caches
   ```bash
   rm -rf .next
   rm -rf node_modules/.cache
   ```

3. Check your Tailwind content configuration to ensure it includes UI toolkit components:
   ```typescript
   content: [
     // ...other paths
     "./node_modules/@mento-protocol/ui-toolkit/dist/**/*.{js,ts,jsx,tsx}",
   ],
   ```

### Font Issues

1. Ensure the font variables are properly set:
   ```typescript
   // Must match these names
   variable: "--font-inter"  // For Inter font
   ```

2. Apply font classes to html/body elements

### Component Import Errors

If you encounter errors importing components:

1. Check that you're importing from the correct path:
   ```typescript
   // Correct import path
   import { Button } from '@mento-protocol/ui-toolkit';
   
   // Incorrect, don't import from internal paths
   import { Button } from '@mento-protocol/ui-toolkit/dist/components/ui/button';
   ```

2. Verify that Next.js is configured to transpile the package:
   ```javascript
   transpilePackages: ['@mento-protocol/ui-toolkit'],
   ```

### Web3 Integration Issues

1. Ensure you've installed all required peer dependencies:
   ```bash
   pnpm add @rainbow-me/rainbowkit@^2.0.0 \
     @tanstack/react-query@^5.0.0 \
     viem@^2.0.0 \
     wagmi@^2.0.0
   ```

2. Verify that your providers are properly nested:
   ```tsx
   <WagmiProvider>
     <QueryClientProvider>
       <RainbowKitProvider>
         {/* Your app */}
       </RainbowKitProvider>
     </QueryClientProvider>
   </WagmiProvider>
   ```

## Advanced Configuration

### Custom Theme Extension

To extend the default theme with your own values:

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { tailwindConfig } from "@mento-protocol/ui-toolkit";

export default {
  presets: [tailwindConfig],
  theme: {
    extend: {
      colors: {
        // Add your custom colors
        'custom-blue': '#1a2b3c',
        'custom-green': '#2c3e4d',
      },
      spacing: {
        // Add custom spacing
        'custom-1': '10px',
        'custom-2': '20px',
      },
      // Other theme extensions
    }
  }
} satisfies Config;
```

### Local Development Workflow

If you're working on both the UI toolkit and your application simultaneously:

```bash
# In ui-toolkit directory
pnpm link --global
pnpm build --watch

# In your app directory
pnpm link --global @mento-protocol/ui-toolkit
```

### Server Components Support

The UI toolkit is compatible with React Server Components. For client-side interactivity:

```tsx
'use client';

import { Button } from '@mento-protocol/ui-toolkit';

export default function ClientComponent() {
  return (
    <Button onClick={() => console.log('Clicked!')}>
      Client Action
    </Button>
  );
}
```

## Best Practices

1. **Consistent Theme Usage**
   - Use the theme tokens provided by the toolkit rather than hardcoding colors
   - Extend the theme for app-specific values while preserving the base theme

2. **Component Composition**
   - Use the UI toolkit for base components
   - Compose these components into higher-level application-specific components
   - Avoid overriding component styles directly; instead, use provided variants or props

3. **Accessibility**
   - The components are built with accessibility in mind; don't remove ARIA attributes
   - Maintain proper focus management when building custom interactions
   - Test with keyboard navigation and screen readers

4. **Performance**
   - Import only the components you need
   - Use dynamic imports for larger components when appropriate

5. **Versioning**
   - Pin the UI toolkit version in your package.json to avoid unexpected changes
   - Read the changelog before upgrading to new versions

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs)
- [Wagmi Documentation](https://wagmi.sh/)

For specific questions or issues, please refer to the [GitHub repository](https://github.com/mento-protocol/ui-toolkit) or submit an issue. 