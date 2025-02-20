# UI Toolkit CSS Import Investigation Guide

## Current Issue
Consuming applications are encountering 500 errors when trying to import the UI toolkit's CSS using:
```css
@import "@mento-protocol/ui-toolkit/styles";
```

## Investigation Steps

### 1. Verify Package Export Configuration
```json
// package.json in ui-toolkit
{
  "exports": {
    "./styles": {
      "import": "./dist/styles/index.css",
      "require": "./dist/styles/index.css"
    }
  }
}
```

### 2. Build Output Verification
```bash
# In ui-toolkit directory
pnpm build
ls -la dist/styles/
cat dist/styles/index.css  # Verify content is correct
```

Expected structure:
```
dist/
  ├── styles/
  │   └── index.css  # Should contain compiled styles
  └── ...
```

### 3. Local Testing Steps
1. Link package locally:
   ```bash
   # In ui-toolkit
   pnpm link --global
   
   # In consuming app
   pnpm link --global @mento-protocol/ui-toolkit
   ```

2. Test different import methods:
   ```css
   /* Method 1: Using subpath exports */
   @import "@mento-protocol/ui-toolkit/styles";
   
   /* Method 2: Direct path */
   @import "@mento-protocol/ui-toolkit/dist/styles/index.css";
   ```

### 4. Next.js Configuration Check
```typescript
// next.config.mjs
import { createRequire } from 'module';

const config = {
  transpilePackages: ['@mento-protocol/ui-toolkit'],
  experimental: {
    optimizeCss: true,  // Optional: Enable if using CSS optimization
  },
};

export default config;
```

### 5. Common Issues to Check

1. **Build Process**
   - Verify CSS is being processed by PostCSS
   - Check if styles are being tree-shaken incorrectly
   - Ensure CSS files are included in the build output

2. **Import Resolution**
   - Check if Next.js is resolving the CSS import correctly
   - Verify package resolution in node_modules
   - Check for path resolution issues

3. **Style Processing**
   - Confirm PostCSS configuration is correct
   - Verify Tailwind is processing the imported styles
   - Check for CSS module conflicts

### 6. Debugging Commands
```bash
# Enable verbose Next.js output
DEBUG=* next dev

# Check package resolution
node --print "require.resolve('@mento-protocol/ui-toolkit/styles')"

# Verify package installation
pnpm why @mento-protocol/ui-toolkit
```

## Potential Solutions

1. **Update Export Configuration**
```json
{
  "exports": {
    "./styles/*": "./dist/styles/*",
    "./styles": "./dist/styles/index.css"
  }
}
```

2. **Add CSS Handling to Build**
```js
// tsup.config.ts
export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  external: ['react'],
  injectStyle: true,  // Ensure CSS is handled
  splitting: false,
});
```

3. **Update Consumer Import**
```typescript
// In consuming app's _app.tsx or layout.tsx
import '@mento-protocol/ui-toolkit/styles';
// Then import other styles
import '../styles/globals.css';
```

## Next Steps
1. Implement verbose logging in the build process
2. Test with a minimal reproduction repository
3. Verify CSS bundling in both development and production builds
4. Consider adding CSS import examples to documentation 