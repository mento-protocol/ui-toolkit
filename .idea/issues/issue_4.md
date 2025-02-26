# Set up Theme Configuration and Components

## Description

Create a standardized theming system that will be shared across all applications. This includes implementing a consistent dark/light mode toggle, configuring Tailwind themes, managing brand colors, fonts, and other design tokens.

## Technical Requirements

- Set up core theming configuration:
  - Tailwind theme configuration with brand colors
  - Dark/light mode system
  - Typography system with brand fonts
  - Common animation configurations
  - Spacing and layout tokens
- Create theme components:
  - Theme toggle component
  - Theme provider wrapper
  - Theme context hooks
- Configure asset management:
  - Font files
  - Brand icons/logos
  - Other brand assets

## Tasks

- [ ] Create base theme configuration

  - [ ] Set up Tailwind config with brand colors
    - [ ] Primary colors
    - [ ] Secondary colors
    - [ ] Semantic colors (success, error, warning, info)
    - [ ] Gray scale variations
  - [ ] Configure typography system
    - [ ] Import and configure brand fonts (Founders Grotesk, etc.)
    - [ ] Set up font sizes and line heights
    - [ ] Create typography utility classes
  - [ ] Set up spacing and layout tokens
  - [ ] Configure animation presets

- [ ] Implement dark/light mode system

  - [ ] Create theme context provider
  - [ ] Implement theme toggle component
  - [ ] Set up system preference detection
  - [ ] Create storage persistence
  - [ ] Configure CSS variables for theme tokens

- [ ] Set up asset management

  - [ ] Organize font files
  - [ ] Create brand icon components
  - [ ] Set up asset loading optimization

- [ ] Create documentation
  - [ ] Theme usage guidelines
  - [ ] Component theming examples
  - [ ] Color palette documentation
  - [ ] Typography examples

## Acceptance Criteria

- Theme configuration is centralized and easily importable
- Dark/light mode works consistently across all components
- Theme toggle component is reusable and matches brand design
- All colors and typography follow brand guidelines
- Theme changes persist across page refreshes
- System preference for theme is respected
- Documentation includes usage examples and guidelines
- Assets are properly organized and optimized

## Dependencies

- NextJS UI Component repo setup must be completed first
- Access to brand guidelines and design tokens
- List of required theme variations
- Brand assets and fonts

## Additional Notes

- Consider creating a theme generator for different brand variations
- Document best practices for component theming
- Include accessibility considerations
- Consider adding theme transition animations

## Related Files

- governance-ui/tailwind.config.ts
- mento-web/tailwind.config.js
- governance-ui/src/styles/globals.css
- mento-web/src/styles/globals.css
- governance-ui/src/components/\_shared/theme-switch/
- mento-web/src/components/nav/Footer.tsx

## Related Documents

- Project structure document
- Brand guidelines documentation
