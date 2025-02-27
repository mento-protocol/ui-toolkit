# Mento Protocol UI Toolkit - Onboarding Checklist

This checklist is designed to help new developers quickly set up their environment and get familiar with the Mento Protocol UI Toolkit. Check off each item as you complete it to ensure a thorough onboarding process.

## Environment Setup

- [ ] Install Node.js v18+ and pnpm
- [ ] Clone the repository: `git clone https://github.com/mento-protocol/ui-toolkit.git`
- [ ] Install dependencies: `pnpm install`
- [ ] Run the development server: `pnpm dev`
- [ ] Verify that the development server starts without errors
- [ ] Run a test build: `pnpm build`
- [ ] Ensure all linting passes: `pnpm lint`

## Documentation Review

- [ ] Read the main README.md file
- [ ] Review [DEVELOPER-HANDOVER.md](./DEVELOPER-HANDOVER.md) for project overview
- [ ] Study the [COMPONENT-CATALOG.md](./COMPONENT-CATALOG.md) to understand available components
- [ ] Understand the publishing process in [PUBLISHING.md](./PUBLISHING.md)
- [ ] Review [INTEGRATION-GUIDE.md](./INTEGRATION-GUIDE.md) for how applications consume the library
- [ ] Check [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for common issues and solutions
- [ ] Examine [ROADMAP.md](./ROADMAP.md) to understand future direction
- [ ] Review [GITHUB-ACTIONS-PERMISSIONS.md](./GITHUB-ACTIONS-PERMISSIONS.md) for CI/CD understanding

## Code Exploration

- [ ] Explore the component structure in `src/components/`
- [ ] Review the UI components in `src/components/ui/`
- [ ] Examine the Web3 components in `src/components/web3/`
- [ ] Check component exports in `src/components/ui/index.ts`
- [ ] Study the theming system in `configs/tailwind.config.ts`
- [ ] Review global styles in `src/styles/globals.css`
- [ ] Understand utility functions in `src/utils/`
- [ ] Check the build configuration in `package.json` scripts

## Component Understanding

- [ ] Build a basic test page using 3+ core components
- [ ] Create a form with multiple input components
- [ ] Try implementing a component with different variants
- [ ] Test components in both light and dark modes
- [ ] Verify responsive behavior at different viewport sizes
- [ ] Check accessibility with keyboard navigation
- [ ] Inspect component props and TypeScript definitions

## Development Workflow

- [ ] Make a minor change to an existing component
- [ ] Create a changeset: `pnpm changeset`
- [ ] Run the build to verify changes: `pnpm build`
- [ ] Understand the GitHub Actions workflow for publishing
- [ ] Review the versioning strategy with changesets

## Deep Dives

- [ ] Understand the styling approach with Tailwind CSS
- [ ] Study how theming is implemented
- [ ] Review how components handle accessibility
- [ ] Examine Web3 integration components
- [ ] Understand the structure of component variants with class-variance-authority
- [ ] Review TypeScript types and interfaces

## First Tasks Suggestions

Pick one or more of the following to get started:

- [ ] Fix a simple issue from the known issues list
- [ ] Improve documentation for a component
- [ ] Add a missing prop to an existing component
- [ ] Create a new variant for an existing component
- [ ] Resolve a TypeScript error or warning
- [ ] Improve accessibility for a component
- [ ] Add better examples to component documentation

## Integration Testing

- [ ] Create a small test application
- [ ] Install the UI toolkit as a dependency
- [ ] Configure the application according to the integration guide
- [ ] Implement several components from the toolkit
- [ ] Test for any integration issues
- [ ] Verify that theming works correctly

## Questions to Answer

After completing this checklist, you should be able to answer the following questions:

1. What is the architecture of the UI Toolkit?
2. How does the component variant system work?
3. How is theming implemented in the toolkit?
4. What is the process for publishing a new version?
5. How do consuming applications integrate the toolkit?
6. What are the current known issues and their planned solutions?
7. How does the Web3 integration work in the toolkit?
8. What is the roadmap for future development?

## Resources and References

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs/primitives)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/learn)
- [Changesets Documentation](https://github.com/changesets/changesets)
- [class-variance-authority Documentation](https://cva.style/docs)
- [RainbowKit Documentation](https://www.rainbowkit.com/docs/introduction)
- [wagmi Documentation](https://wagmi.sh/react/getting-started)

## Next Steps

After completing this checklist, coordinate with the team to:

1. Get assigned to your first task or issue
2. Schedule a walkthrough of any remaining questions
3. Set up regular check-ins with your mentor
4. Get feedback on your first few PRs

This checklist is designed to be completed within your first week. If you have any questions or difficulties, please reach out to the team for assistance. 