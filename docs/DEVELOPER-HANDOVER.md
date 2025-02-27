# Mento Protocol UI Toolkit - Developer Handover

This document provides incoming developers with a comprehensive overview of the Mento Protocol UI Toolkit, its current state, known issues, and future roadmap.

## Overview

The Mento Protocol UI Toolkit is a comprehensive React component library designed to build consistent and accessible Mento applications. It provides a unified design system with both standard UI components and specialized web3 components.

### Key Features

- **Accessible UI Components**: Built with accessibility in mind using Radix UI primitives
- **Theming System**: Dark/light mode support with customizable themes
- **Web3 Integration**: Specialized components for wallet connection, blockchain interaction
- **Modern Stack**: Next.js, React, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with responsive components

## Repository Structure

```
ui-toolkit/
├── .changeset/           # Changesets configuration for versioning
├── .github/              # GitHub Actions workflows (publish)
├── docs/                 # Documentation files
├── src/
│   ├── components/       # UI components
│   │   ├── ui/           # Core UI components
│   │   ├── web3/         # Web3-specific components
│   │   └── shared/       # Shared utilities
│   ├── styles/           # Global styles and Tailwind configuration
│   ├── utils/            # Utility functions
│   └── hooks/            # Custom React hooks
├── configs/              # Configuration files (Tailwind, ESLint, etc.)
└── public/               # Static assets
```

## Component System

The toolkit is organized into several component categories:

1. **Core UI Components**: Standard UI elements like Button, Card, Modal
2. **Form Components**: Input, Select, Checkbox, etc.
3. **Layout Components**: Grid, Stack, Container
4. **Web3 Components**: WalletConnect, NetworkSelector, TransactionStatus
5. **Feedback Components**: Toast, AlertDialog, ProgressIndicator

See [COMPONENT-CATALOG.md](./COMPONENT-CATALOG.md) for a complete list of components and their current status.

## Current State

The UI Toolkit is currently in active development with most core components stable and ready for use. Several components have known issues that are tracked in the roadmap for resolution.

### Stable Components

Most basic UI components are stable and ready for production use:

- Button, Card, Avatar, Badge, Accordion
- Modal, Dialog, Tooltip
- Basic form inputs (Input, Textarea)
- Layout components

### Known Issues

Several components have known issues:

1. **Calendar & DatePicker**: Issues with react-day-picker causing type errors
2. **Footer**: Context-related issues causing "createContext is not defined" errors
3. **Markdown Editor**: Styling and SSR compatibility issues
4. **Header**: Import-related issues in certain contexts

See the [ROADMAP.md](./ROADMAP.md) for planned fixes and improvements.

## Integration with Applications

The UI Toolkit is currently used in several Mento Protocol applications:

1. **Governance UI**: Found in `lib/governance-ui/`, uses a significant portion of the toolkit's components
2. **Other Mento Applications**: Several applications consume the toolkit as an NPM package

For detailed integration steps, see the [INTEGRATION-GUIDE.md](./INTEGRATION-GUIDE.md).

## Development Workflow

### Local Development

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Run the development server with `pnpm dev`
4. Make changes to components
5. Build with `pnpm build` to verify changes

### Publishing Process

The toolkit uses [Changesets](https://github.com/changesets/changesets) for versioning and publishing:

1. Create a changeset with `pnpm changeset`
2. Commit changes and create a PR
3. When merged to main, the publish workflow creates a PR with version updates
4. Approving and merging this PR triggers publication to NPM

See [PUBLISHING.md](./PUBLISHING.md) for detailed instructions.

## Theming System

The theming system is built on Tailwind CSS with custom extensions:

- Custom color system with semantic naming
- Dark/light mode support via CSS variables
- Font customization support
- Animation and transition presets

Configuration is found in:
- `configs/tailwind.config.ts`: Main Tailwind configuration
- `src/styles/globals.css`: Global styles and CSS variables

## Testing Strategy

The current testing approach includes:

- **Manual Testing**: Component verification in development environment
- **Visual Testing**: Components are verified in various themes and viewports
- **Integration Testing**: Components are tested within consuming applications

**Roadmap includes**:
- Unit tests for component logic
- Visual regression testing
- Accessibility testing automation

## GitHub Actions and CI/CD

The repository uses GitHub Actions for:

1. **Publishing**: Automated publishing process with Changesets
2. **Linting**: Ensuring code quality standards
3. **Building**: Verifying build process works correctly

See `.github/workflows/` for all workflow configurations.

## Documentation

Documentation is divided into several files:

- `README.md`: Main documentation with installation and usage examples
- `docs/COMPONENT-CATALOG.md`: List of all components and their status
- `docs/INTEGRATION-GUIDE.md`: Instructions for integrating the toolkit
- `docs/ROADMAP.md`: Planned improvements and features
- `docs/TROUBLESHOOTING.md`: Common issues and solutions
- `docs/PUBLISHING.md`: Publishing process documentation
- `docs/GITHUB-ACTIONS-PERMISSIONS.md`: GitHub Actions permissions guidance

## Common Challenges and Solutions

See [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for detailed guidance on common issues.

### Key Areas to Be Aware Of

1. **Component Dependencies**: Some components rely on specific peer dependencies
2. **Style Application**: Tailwind configurations must be set correctly
3. **Next.js Integration**: May require transpilePackages configuration
4. **Web3 Component Setup**: Requires proper provider configuration
5. **TypeScript Compatibility**: Type definitions may need updates with library updates

## Best Practices

When working with the UI Toolkit, follow these best practices:

1. **Component Creation**:
   - Follow the established patterns for component structure
   - Include proper TypeScript types for all props
   - Implement proper accessibility features
   - Include appropriate variants using class-variance-authority

2. **Styling**:
   - Use the Tailwind-based styling system
   - Leverage CSS variables for theming
   - Follow the defined color system semantics
   - Ensure dark mode compatibility

3. **Documentation**:
   - Document all component props
   - Include examples for various use cases
   - Update documentation when adding/changing components

4. **Version Management**:
   - Use changesets for all changes
   - Follow semantic versioning principles
   - Document breaking changes clearly

## Roadmap Highlights

See [ROADMAP.md](./ROADMAP.md) for the complete roadmap. Key priorities include:

### Short-Term (1-3 Months)

- Fix Calendar and DatePicker components
- Resolve Footer component context issues
- Improve TypeScript compatibility
- Enhance documentation with better examples

### Medium-Term (3-6 Months)

- Implement automated testing
- Enhance web3 component functionality
- Improve styling system with better HSL color system
- Add more specialized components for DeFi applications

### Long-Term (6+ Months)

- Component composition system
- Mobile-specific optimizations
- Performance improvements
- Design token system

## Onboarding Steps for New Developers

1. **Environment Setup**:
   - Clone the repository
   - Install Node.js v18+ and pnpm
   - Run `pnpm install` to install dependencies
   - Run `pnpm dev` to start the development server

2. **Codebase Familiarization**:
   - Review the component structure in `src/components/`
   - Explore the theming system in `configs/tailwind.config.ts`
   - Understand how components are exported in `src/components/ui/index.ts`

3. **Development Process**:
   - Make changes to components or add new ones
   - Test changes in the development environment
   - Document changes in the appropriate files
   - Create a changeset for version management
   - Submit a PR for review

4. **Testing Components**:
   - Test components in both light and dark themes
   - Verify responsive behavior across viewports
   - Check accessibility with keyboard navigation
   - Ensure proper prop validation and error handling

## Contact and Support

- **GitHub Repository**: [https://github.com/mento-protocol/ui-toolkit](https://github.com/mento-protocol/ui-toolkit)
- **NPM Package**: [@mento-protocol/ui-toolkit](https://www.npmjs.com/package/@mento-protocol/ui-toolkit)
- **Current Maintainers**: The Mento Labs UI team

## Appendix

### Key Dependencies

- **React**: v18.2+
- **Next.js**: v13+
- **TypeScript**: v5+
- **Tailwind CSS**: v3.3+
- **Radix UI**: Various primitives
- **class-variance-authority**: For component variants
- **Web3 Libraries**: wagmi, RainbowKit, viem

### Related Projects

- **Governance UI**: Mento governance interface using the UI Toolkit
- **Mento Protocol dApps**: Various applications built with the UI Toolkit

This handover document should provide new developers with a comprehensive understanding of the UI Toolkit's current state, architecture, and development workflow. 