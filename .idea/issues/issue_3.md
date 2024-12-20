# Set up Core and Minor Utilities Package

## Description
Create a standardized utilities package that includes both core development utilities (prettier, eslint, cva, clsx) and minor utility functions (address shortening, BigInt parsing) that will be shared across all applications.

## Technical Requirements
- Set up core development utilities:
  - ESLint configuration with TypeScript support
  - Prettier configuration for consistent formatting
  - CVA setup for component variants
  - CLSX configuration for conditional classes
- Create minor utility functions:
  - Address shortening
  - BigInt parsing
  - Other common Web3 utilities
- Configure testing environment for utilities
- Set up documentation system

## Tasks
- [ ] Core Development Utilities
  - [ ] Create base ESLint configuration
    - [ ] TypeScript rules
    - [ ] React/Next.js specific rules
    - [ ] Custom rule configurations
  - [ ] Set up Prettier configuration
    - [ ] Define code style rules
    - [ ] Create ignore patterns
  - [ ] Configure CVA
    - [ ] Set up variant types
    - [ ] Create component variant utilities
  - [ ] Implement CLSX helpers
    - [ ] Create type-safe class merging utilities

- [ ] Minor Utilities
  - [ ] Create Web3 utility functions
    - [ ] Address formatting/shortening
    - [ ] BigInt parsing and formatting
    - [ ] Transaction status helpers
  - [ ] Create common string manipulation utilities
  - [ ] Create common number formatting utilities

- [ ] Testing & Documentation
  - [ ] Set up Jest/Vitest configuration
  - [ ] Create unit tests for all utilities
  - [ ] Write usage documentation
  - [ ] Create example implementations

## Acceptance Criteria
- All core development utilities are properly configured and documented
- Minor utilities are implemented with full test coverage
- Documentation includes usage examples for all utilities
- Integration examples are provided in the example app
- All utilities are type-safe and properly exported
- Configuration can be easily extended or modified
- Utilities work consistently across all target applications

## Dependencies
- NextJS UI Component repo setup must be completed first
- Access to existing utility implementations from current repos

## Additional Notes
- Consider creating a utility generator for common patterns
- Document best practices for creating new utilities
- Include performance considerations
- Create migration guide for existing implementations

## Related Documents
- Reference to project structure document
- Link to existing utility implementations