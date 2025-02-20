# Component Styles Debug Guide

## Current Issue
Components from `@mento-protocol/ui-toolkit` are not receiving proper Tailwind styles in the consuming application, despite fonts working correctly.

## Quick Verification

1. **Content Path Check**
   ```typescript
   // tailwind.config.ts in consuming app
   /** @type {import('tailwindcss').Config} */
   export default {
     presets: [require("@mento-protocol/ui-toolkit/configs/tailwind.config")],
     content: [
       "./src/**/*.{js,ts,jsx,tsx}",
       "./app/**/*.{js,ts,jsx,tsx}",
       // Critical: Include the UI toolkit components
       "./node_modules/@mento-protocol/ui-toolkit/dist/**/*.{js,ts,jsx,tsx}",
     ],
   }
   ```

2. **Component Import Check**
   ```typescript
   // Verify the import path matches the compiled output
   import { Button } from '@mento-protocol/ui-toolkit'
   // Should match
   node_modules/@mento-protocol/ui-toolkit/dist/index.mjs
   ```

## Diagnostic Steps

1. **Check Component Class Generation**
   ```bash
   # In consuming app
   DEBUG=tailwindcss:* pnpm dev
   
   # Look for output like:
   # [tailwindcss] Generated classes for: node_modules/@mento-protocol/ui-toolkit/dist/**/*
   ```

2. **Inspect Built Components**
   ```bash
   # In UI toolkit directory
   cat dist/components/ui/button.mjs
   # Verify className attributes are preserved and not mangled
   ```

3. **Style Layer Order**
   ```typescript
   // app/layout.tsx or pages/_app.tsx
   import '@mento-protocol/ui-toolkit/styles'  // Should come first
   import './globals.css'                      // Should come second
   ```

## Common Issues & Solutions

1. **Missing Component Files in Content Scan**
   ```typescript
   // tailwind.config.ts
   export default {
     content: [
       // ❌ Too specific
       "./node_modules/@mento-protocol/ui-toolkit/dist/components/**/*.js",
       
       // ✅ Correct - includes all component files
       "./node_modules/@mento-protocol/ui-toolkit/dist/**/*.{js,ts,jsx,tsx}",
     ]
   }
   ```

2. **Build Output Structure**
   ```bash
   # Check UI toolkit dist structure
   tree dist/
   
   # Expected structure:
   dist/
   ├── components/
   │   └── ui/
   │       ├── button.mjs
   │       └── ...
   ├── index.mjs
   └── styles/
       └── index.css
   ```

3. **Style Purging Issues**
   ```typescript
   // tailwind.config.ts
   export default {
     content: [...],
     safelist: [
       // Add component class patterns that might be purged
       {
         pattern: /^btn-/,
         pattern: /^ui-/,
         // Add other component-specific patterns
       }
     ]
   }
   ```

## Component Style Verification

1. **Test Component**
   ```tsx
   // pages/test.tsx
   import { Button } from '@mento-protocol/ui-toolkit'
   
   export default function Test() {
     return (
       <div className="space-y-4 p-4">
         <Button variant="default">Default</Button>
         <Button variant="outline">Outline</Button>
         <Button variant="ghost">Ghost</Button>
       </div>
     )
   }
   ```

2. **CSS Inspection**
   ```bash
   # In consuming app
   cat .next/static/css/*.css | grep -A 10 "btn-"
   # Should see component classes
   ```

## Build Process Verification

1. **UI Toolkit Build**
   ```bash
   # In UI toolkit directory
   pnpm build
   
   # Verify output
   cat dist/styles/index.css
   # Should contain component styles
   ```

2. **Consuming App Build**
   ```bash
   # In consuming app
   rm -rf .next
   rm -rf node_modules/.cache
   TAILWIND_MODE=build pnpm build
   ```

## Debug Commands

```bash
# Watch Tailwind processing
DEBUG=tailwindcss:* pnpm dev

# Check which files Tailwind is scanning
DEBUG=tailwindcss:context:* pnpm dev

# Verify component file contents
cat node_modules/@mento-protocol/ui-toolkit/dist/components/ui/**/*.mjs
```

## Component Class Structure Check

1. **Source Component**
   ```tsx
   // UI toolkit source
   export function Button({ className, ...props }) {
     return (
       <button 
         className={cn(
           "btn-base btn-variant-default",
           className
         )} 
         {...props} 
       />
     )
   }
   ```

2. **Built Component**
   ```js
   // Verify dist output preserves classes
   cat dist/components/ui/button.mjs
   ```

## If Issues Persist

1. **Compare CSS Output**
   ```bash
   # In UI toolkit
   pnpm build
   cat dist/styles/index.css > ~/toolkit-styles.css
   
   # In consuming app
   pnpm build
   cat .next/static/css/*.css > ~/app-styles.css
   
   # Compare
   diff ~/toolkit-styles.css ~/app-styles.css
   ```

2. **Check for Style Conflicts**
   ```typescript
   // tailwind.config.ts
   export default {
     presets: [require("@mento-protocol/ui-toolkit/configs/tailwind.config")],
     // Ensure no theme overrides that might conflict
     theme: {
       extend: {
         // Your extensions here
       }
     }
   }
   ```

Please provide:
1. The component that's not receiving styles
2. The expected styles vs actual styles
3. Your Tailwind configuration
4. Build output showing component class generation 