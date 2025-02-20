# UI Toolkit Style Resolution Debug Guide

## Current Issue
Tailwind styles and fonts from `@mento-protocol/ui-toolkit` are not being applied in the consuming Next.js application.

## Quick Verification

1. **Style Import Check**
   ```tsx
   // app/layout.tsx or pages/_app.tsx
   import '@mento-protocol/ui-toolkit/styles'
   // Should be imported before any other styles
   import './globals.css' // or your main CSS file
   ```

2. **Tailwind Config Verification**
   ```typescript
   // tailwind.config.ts
   import { tailwindConfig } from '@mento-protocol/ui-toolkit'
   
   /** @type {import('tailwindcss').Config} */
   export default {
     presets: [tailwindConfig],
     content: [
       './src/**/*.{js,ts,jsx,tsx}',
       './app/**/*.{js,ts,jsx,tsx}',
       // Critical: Include the UI toolkit components
       './node_modules/@mento-protocol/ui-toolkit/dist/**/*.{js,ts,jsx,tsx}'
     ],
     // Your theme extensions should come after the preset
     theme: {
       extend: {}
     }
   }
   ```

## Diagnostic Steps

1. **Check CSS Build Output**
   ```bash
   # In the UI toolkit directory
   ls -la dist/styles/index.css
   # Should show a non-empty CSS file
   
   # Check the content
   cat dist/styles/index.css
   # Should contain Tailwind utilities and custom styles
   ```

2. **PostCSS Configuration**
   ```javascript
   // postcss.config.js
   module.exports = {
     plugins: {
       'tailwindcss': {},
       'autoprefixer': {},
       // Ensure no conflicting CSS processors
     }
   }
   ```

3. **Font Loading Check**
   ```typescript
   // app/layout.tsx
   import { Inter } from 'next/font/google'
   // or your custom font loader
   
   const inter = Inter({ subsets: ['latin'] })
   
   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode
   }) {
     return (
       <html lang="en">
         <body className={inter.className}>{children}</body>
       </html>
     )
   }
   ```

## Common Issues & Solutions

1. **Style Loading Order**
   ```tsx
   // ❌ Wrong order
   import './globals.css'
   import '@mento-protocol/ui-toolkit/styles'
   
   // ✅ Correct order
   import '@mento-protocol/ui-toolkit/styles'
   import './globals.css'
   ```

2. **Missing Tailwind Directives**
   ```css
   /* globals.css */
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   
   /* Your custom styles after Tailwind directives */
   ```

3. **Font Configuration**
   ```typescript
   // tailwind.config.ts
   import { tailwindConfig } from '@mento-protocol/ui-toolkit'
   
   /** @type {import('tailwindcss').Config} */
   export default {
     presets: [tailwindConfig],
     theme: {
       extend: {
         fontFamily: {
           // Ensure these don't conflict with UI toolkit fonts
           sans: ['var(--font-inter)', ...tailwindConfig.theme.fontFamily.sans],
         }
       }
     }
   }
   ```

## Debug Commands

```bash
# Check if Tailwind is processing files
DEBUG=tailwindcss:* pnpm dev

# Verify PostCSS processing
DEBUG=postcss:* pnpm dev

# Clear CSS cache
rm -rf .next/cache/css/*
```

## Style Inspection Steps

1. **Component Class Verification**
   ```tsx
   // Test component with explicit classes
   export default function TestComponent() {
     return (
       <div className="flex items-center justify-center p-4 bg-primary text-white">
         <h1 className="text-2xl font-bold">Test Heading</h1>
       </div>
     )
   }
   ```

2. **Browser Inspection**
   - Open browser dev tools
   - Inspect component elements
   - Check:
     - Applied classes
     - CSS specificity
     - Source of styles (which CSS file)
     - Any conflicting styles

## CSS Module Conflicts

1. **Check for Global Style Conflicts**
   ```css
   /* globals.css */
   /* ❌ Avoid global resets that might conflict */
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
   
   /* ✅ Use Tailwind's base styles */
   @tailwind base;
   ```

2. **CSS Module Isolation**
   ```tsx
   // If using CSS modules, ensure they don't override toolkit styles
   import styles from './Component.module.css'
   
   export default function Component() {
     return (
       // Use composition instead of override
       <div className={`${styles.local} toolkit-class`}>
         Content
       </div>
     )
   }
   ```

## Verification Tests

1. **Basic Style Test**
   ```tsx
   // pages/style-test.tsx
   import { Button } from '@mento-protocol/ui-toolkit'
   
   export default function StyleTest() {
     return (
       <div className="space-y-4 p-4">
         <Button>Default Button</Button>
         <Button variant="outline">Outline Button</Button>
         <div className="font-sans">Font Test</div>
         <div className="bg-primary text-white p-4">Theme Color Test</div>
       </div>
     )
   }
   ```

2. **Theme Color Test**
   ```tsx
   export default function ColorTest() {
     return (
       <div className="grid grid-cols-2 gap-4 p-4">
         {['primary', 'secondary', 'accent'].map((color) => (
           <div
             key={color}
             className={`bg-${color} p-4 text-${color}-foreground rounded`}
           >
             {color}
           </div>
         ))}
       </div>
     )
   }
   ```

## If Issues Persist

1. Compare the compiled CSS in both projects:
   ```bash
   # In UI toolkit
   cat dist/styles/index.css > ~/toolkit-styles.css
   
   # In consuming project
   cat .next/static/css/*.css > ~/app-styles.css
   
   # Compare
   diff ~/toolkit-styles.css ~/app-styles.css
   ```

2. Check for style purging:
   ```typescript
   // tailwind.config.ts
   export default {
     presets: [tailwindConfig],
     safelist: [
       // Add any dynamically used classes that might be purged
       {
         pattern: /^bg-/,
         pattern: /^text-/,
         // etc.
       }
     ]
   }
   ```

Please provide the following if issues persist:
1. Your complete Tailwind configuration
2. The compiled CSS output
3. Browser dev tools screenshots showing style application
4. Any error messages from the build process 