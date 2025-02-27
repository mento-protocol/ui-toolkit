# Mento Protocol UI Toolkit - Troubleshooting Guide

This guide addresses common issues you might encounter when working with the UI Toolkit and provides step-by-step solutions.

## Table of Contents

1. [Installation Issues](#installation-issues)
2. [Styling Problems](#styling-problems)
3. [Component Usage Issues](#component-usage-issues)
4. [TypeScript Errors](#typescript-errors)
5. [Build and Compilation Problems](#build-and-compilation-problems)
6. [Web3 Integration Challenges](#web3-integration-challenges)
7. [Performance Concerns](#performance-concerns)

## Installation Issues

### Package Resolution Errors

**Problem**: Error resolving package dependencies or version conflicts.

**Solution**:
1. Check for duplicate dependencies:
   ```bash
   npx ls-madge
   ```

2. Clear package manager cache:
   ```bash
   # For pnpm
   pnpm store prune
   
   # For npm
   npm cache clean --force
   
   # For yarn
   yarn cache clean
   ```

3. Use resolutions in package.json:
   ```json
   "resolutions": {
     "react": "18.2.0",
     "react-dom": "18.2.0"
   }
   ```

### Peer Dependency Warnings

**Problem**: Warnings about unmet peer dependencies.

**Solution**:
1. Install the specific peer dependencies mentioned:
   ```bash
   pnpm add @rainbow-me/rainbowkit@^2.0.0 \
     @tanstack/react-query@^5.0.0 \
     viem@^2.0.0 \
     wagmi@^2.0.0
   ```

2. For optional dependencies (framer-motion, next-themes), install them only if needed.

3. Use `--legacy-peer-deps` as a temporary solution (not recommended for production):
   ```bash
   npm install --legacy-peer-deps
   ```

## Styling Problems

### Components Rendering Without Styles

**Problem**: Components appear unstyled despite proper installation.

**Solution**:
1. Verify import order in globals.css:
   ```css
   /* UI Toolkit styles must come BEFORE Tailwind directives */
   @import "@mento-protocol/ui-toolkit/dist/styles/index.css";
   
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. Check Tailwind content configuration:
   ```js
   content: [
     // other paths...
     "./node_modules/@mento-protocol/ui-toolkit/dist/**/*.{js,ts,jsx,tsx}",
   ],
   ```

3. Clear caches:
   ```bash
   rm -rf .next
   rm -rf node_modules/.cache
   ```

4. Rebuild your application:
   ```bash
   pnpm build
   ```

### Dark Mode Not Working

**Problem**: Dark mode theme doesn't apply correctly.

**Solution**:
1. Verify ThemeProvider is correctly implemented:
   ```tsx
   import { ThemeProvider } from '@mento-protocol/ui-toolkit';
   
   <ThemeProvider 
     attribute="class" 
     defaultTheme="system" 
     enableSystem
   >
     {children}
   </ThemeProvider>
   ```

2. Check HTML structure for class attribute:
   ```tsx
   <html className={inter.variable}>
   ```

3. Ensure dark variants are used in your components:
   ```tsx
   <div className="bg-white dark:bg-black text-black dark:text-white">
   ```

4. Use browser devtools to check if the `dark` class is being applied to the `html` element.

### Font Issues

**Problem**: Custom fonts not loading or fallbacks being used.

**Solution**:
1. Verify font configuration:
   ```tsx
   const inter = Inter({
     subsets: ["latin"],
     display: "swap",
     variable: "--font-inter", // Must match this exact name
   });
   
   // Applied to HTML element
   <html className={`${inter.variable}`}>
   ```

2. Check if the correct CSS variables are defined in your styles:
   ```css
   :root {
     --font-inter: "Inter", sans-serif;
     --font-fg: "Founders Grotesk", sans-serif;
   }
   ```

3. Verify font files are accessible (check network tab in devtools).

## Component Usage Issues

### Calendar & DatePicker Not Exported

**Problem**: Trying to import disabled Calendar or DatePicker components.

**Solution**:
1. These components are currently disabled due to issues with react-day-picker.

2. For date picking functionality, consider using a temporary alternative:
   ```tsx
   // Simple native date input with custom styling
   <input 
     type="date" 
     className="rounded-md border border-gray-light p-2"
     onChange={(e) => setDate(new Date(e.target.value))} 
   />
   ```

3. Or integrate a different date picker library directly in your project.

4. Watch for updates to the UI Toolkit when these components are fixed.

### Context-Related Errors

**Problem**: Errors related to missing context or "createContext is not defined".

**Solution**:
1. For components with context issues (like Footer):
   - Implement your own temporary solution 
   - Check component imports order
   - Ensure parent providers are properly set up

2. For context errors in your components:
   ```tsx
   // Move context creation to a separate file
   // context.tsx
   import { createContext } from 'react';
   export const MyContext = createContext(null);
   
   // component.tsx
   import { MyContext } from './context';
   ```

3. Check for circular dependencies in your imports.

### Props Type Errors

**Problem**: TypeScript errors when passing props to components.

**Solution**:
1. Check component documentation for required and optional props.

2. Use proper type imports:
   ```tsx
   import { Button, type ButtonProps } from '@mento-protocol/ui-toolkit';
   ```

3. For untyped props, use type assertions cautiously:
   ```tsx
   <Component {...(props as any)} />
   ```

## TypeScript Errors

### Type Compatibility Errors

**Problem**: TypeScript errors related to incompatible types.

**Solution**:
1. Update TypeScript to the latest version:
   ```bash
   pnpm add typescript@latest -D
   ```

2. Check `tsconfig.json` settings:
   ```json
   {
     "compilerOptions": {
       "skipLibCheck": true,
       "esModuleInterop": true,
       "allowSyntheticDefaultImports": true
     }
   }
   ```

3. For third-party dependencies with type issues, create local type declarations:
   ```typescript
   // react-copy-to-clipboard.d.ts
   declare module 'react-copy-to-clipboard' {
     export interface CopyToClipboardProps {
       text: string;
       onCopy?: (text: string, result: boolean) => void;
       options?: {
         debug?: boolean;
         message?: string;
       };
       children?: React.ReactNode;
     }
     
     export const CopyToClipboard: React.FC<CopyToClipboardProps>;
   }
   ```

### Missing Type Definitions

**Problem**: "Could not find a declaration file for module" errors.

**Solution**:
1. Install @types package if available:
   ```bash
   pnpm add -D @types/package-name
   ```

2. Create a declaration file for the module:
   ```typescript
   // types/module-name.d.ts
   declare module 'module-name';
   ```

3. Add to the `typeRoots` in tsconfig.json:
   ```json
   {
     "compilerOptions": {
       "typeRoots": ["./node_modules/@types", "./types"]
     }
   }
   ```

## Build and Compilation Problems

### Next.js Compilation Errors

**Problem**: Next.js fails to compile UI Toolkit components.

**Solution**:
1. Configure Next.js to transpile the package:
   ```js
   // next.config.mjs
   export default {
     transpilePackages: ['@mento-protocol/ui-toolkit'],
   };
   ```

2. For React Server Components issues, mark components client-side:
   ```tsx
   'use client';
   
   import { Component } from '@mento-protocol/ui-toolkit';
   ```

3. For module resolution errors, configure module resolution:
   ```js
   // next.config.mjs
   export default {
     modularizeImports: {
       '@mento-protocol/ui-toolkit': {
         transform: '@mento-protocol/ui-toolkit/{{member}}',
       },
     },
   };
   ```

### Bundler Warnings

**Problem**: Bundle size warnings or tree-shaking issues.

**Solution**:
1. Import only needed components:
   ```tsx
   // Good - specific imports
   import { Button, Card } from '@mento-protocol/ui-toolkit';
   
   // Bad - importing everything
   import * as UI from '@mento-protocol/ui-toolkit';
   ```

2. Use dynamic imports for larger components:
   ```tsx
   import dynamic from 'next/dynamic';
   
   const Modal = dynamic(() => import('@mento-protocol/ui-toolkit').then(
     (mod) => mod.Modal
   ));
   ```

3. Use production builds:
   ```bash
   NODE_ENV=production pnpm build
   ```

## Web3 Integration Challenges

### Wallet Connection Issues

**Problem**: Wallet connect button doesn't work or shows errors.

**Solution**:
1. Verify proper provider setup:
   ```tsx
   import { WagmiProvider, createConfig } from 'wagmi';
   import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
   import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
   
   const queryClient = new QueryClient();
   const config = createConfig(/* your config */);
   
   function Providers({ children }) {
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
   ```

2. Check for version conflicts between wagmi and RainbowKit:
   ```bash
   pnpm add @rainbow-me/rainbowkit@latest wagmi@latest
   ```

3. Verify that you have a WalletConnect project ID:
   ```typescript
   getDefaultConfig({
     appName: 'Your App',
     projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // Required
     chains: [/* your chains */],
   });
   ```

### Chain/Network Configuration

**Problem**: Unsupported chain errors or network switching issues.

**Solution**:
1. Check chain configuration:
   ```typescript
   import { celo, celoCico, celoAlfajores } from 'wagmi/chains';
   
   const chains = [celo, celoCico, celoAlfajores];
   ```

2. For custom chains, define them properly:
   ```typescript
   import { defineChain } from 'wagmi/chains';
   
   const customChain = defineChain({
     id: 1234,
     name: 'Custom Chain',
     network: 'custom',
     nativeCurrency: {
       decimals: 18,
       name: 'Native Token',
       symbol: 'NT',
     },
     rpcUrls: {
       default: { http: ['https://rpc.example.com'] },
       public: { http: ['https://public-rpc.example.com'] },
     },
   });
   ```

## Performance Concerns

### Slow Initial Load

**Problem**: Components take a long time to initially render.

**Solution**:
1. Implement code splitting with dynamic imports:
   ```tsx
   import dynamic from 'next/dynamic';
   
   const HeavyComponent = dynamic(() => import('@mento-protocol/ui-toolkit').then(
     (mod) => mod.HeavyComponent
   ), {
     loading: () => <p>Loading...</p>
   });
   ```

2. Use React.memo for components that don't change often:
   ```tsx
   import { memo } from 'react';
   import { ComponentWithProps } from '@mento-protocol/ui-toolkit';
   
   const MemoizedComponent = memo(ComponentWithProps);
   ```

3. Implement proper suspense boundaries:
   ```tsx
   import { Suspense } from 'react';
   
   <Suspense fallback={<div>Loading...</div>}>
     <ComponentWithHeavyLoad />
   </Suspense>
   ```

### Layout Shifts

**Problem**: Components cause layout shifts during rendering.

**Solution**:
1. Define sizes for components that load dynamic content:
   ```tsx
   <div style={{ minHeight: '200px', position: 'relative' }}>
     <DynamicComponent />
   </div>
   ```

2. Use skeleton loaders:
   ```tsx
   import { ValueLoaderSkeleton } from '@mento-protocol/ui-toolkit';
   
   {isLoading ? <ValueLoaderSkeleton /> : <ActualContent />}
   ```

3. Ensure images have width and height attributes:
   ```tsx
   <Avatar
     src={userAvatar}
     width={48}
     height={48}
     alt="User avatar"
     fallback="JD"
   />
   ```

## Additional Resources

If you're still experiencing issues:

1. Check the [GitHub repository](https://github.com/mento-protocol/ui-toolkit) for known issues
2. Review the [COMPONENT-CATALOG.md](./COMPONENT-CATALOG.md) for component-specific notes
3. Consult the [INTEGRATION-GUIDE.md](./INTEGRATION-GUIDE.md) for setup requirements
4. For build-specific issues, see the library's README troubleshooting section

## Debugging Steps

### Style Debugging

To debug style issues:

```bash
# Enable Tailwind debug output
DEBUG=tailwindcss:* pnpm dev

# Check PostCSS processing
DEBUG=postcss:* pnpm dev

# More detailed component styling debug
DEBUG=*:(tailwind|postcss)* pnpm dev
```

### Component Debugging

For React Developer Tools debugging:

1. Install React Developer Tools browser extension
2. Use the Components tab to inspect:
   - Component props
   - Component state
   - Context values
   - Render counts

### Network Debugging

For web3 component issues:

1. Check browser console for RPC errors
2. Verify network connections in wallet
3. Use browser network tab to inspect API calls
4. Check for CORS issues with RPC endpoints

### Module Resolution Debugging

For import/require issues:

```bash
# Print module resolution paths
NODE_OPTIONS=--trace-deprecation pnpm dev

# For Next.js detailed module resolution logs
NEXT_DEBUG=true pnpm dev
```

## Contact & Support

For issues not covered in this guide:

1. Create a detailed GitHub issue with reproduction steps
2. Include relevant error messages and environment details
3. For urgent matters, contact the maintainers directly 