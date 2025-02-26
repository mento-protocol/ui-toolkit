# Set up NextJS UI Component Development Environment with Trunk

## Description

Create initial setup for a NextJS-based UI component development environment that will serve as both a component playground and living style $$guide for our shared UI components, using Trunk.io for code quality management.

## Technical Requirements

- Set up a new NextJS project using the latest stable version
- Configure TypeScript
- Set up core styling dependencies:
  - TailwindCSS
  - CVA (Class Variance Authority)
  - CLSX
- Configure development tooling via Trunk:
  - ESLint
  - Prettier
  - Git hooks management
  - Markdown linting
  - YAML linting
- Create basic folder structure for:
  - Components
  - Themes
  - Web3 configurations
  - Utilities
  - Styleguide example folder

## Tasks

- [ ] Initialize new NextJS project with TypeScript
- [ ] Set up TailwindCSS with basic configuration
- [ ] Set up Trunk.io:
  - [ ] Create `.trunk/trunk.yaml` configuration
  - [ ] Configure linters:
    - [ ] ESLint with TypeScript support
    - [ ] Prettier
    - [ ] Markdownlint
    - [ ] YAML lint
  - [ ] Set up git hooks:
    - [ ] pre-commit for formatting
    - [ ] pre-push for full checks
- [ ] Configure component development environment
- [ ] Create basic documentation structure
- [ ] Set up example pages for component demonstration
- [ ] Configure build process
- [ ] Add README with setup instructions
- [ ] Set up CI/CD pipeline for builds and tests

## Acceptance Criteria

- Project successfully builds and runs locally
- Basic example page renders correctly
- All core dependencies are properly configured
- Documentation structure is in place
- Trunk.io is properly configured and working:
  - ESLint runs on save and in CI
  - Prettier formats on save and in pre-commit
  - Full checks run on pre-push
  - CI pipeline uses Trunk for validation
- VS Code integration works with recommended extensions

## Additional Notes

- This will serve as the foundation for our shared UI component library
- Should follow the structure outlined in the project overview document
- Trunk.io configuration based on example from oracle-relayer project
