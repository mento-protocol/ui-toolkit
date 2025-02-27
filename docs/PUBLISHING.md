# Publishing Workflow Guide

This document provides a detailed guide to the publishing workflow for the UI Toolkit, explaining how we use Changesets and GitHub Actions to automate versioning and publishing to NPM.

## Overview

The UI Toolkit uses a modern, automated publishing approach that:

1. Uses [Changesets](https://github.com/changesets/changesets) to manage versioning
2. Leverages GitHub Actions for CI/CD automation
3. Maintains a clean, auditable version history
4. Provides NPM package security through provenance

## Local Development Workflow

### 1. Making Changes

When working on the UI Toolkit, follow these steps:

```bash
# Create a new branch for your changes
git checkout -b feature/your-feature-name

# Make your changes to the codebase
# ...

# Run tests and verify your changes
pnpm test
pnpm lint
pnpm build
```

### 2. Creating Changesets

Once your changes are ready, create a changeset to document them:

```bash
pnpm changeset
```

This interactive command will:
- Ask which packages are affected (select the UI Toolkit)
- Ask what kind of version change this represents:
  - **major** (breaking changes)
  - **minor** (new features, non-breaking)
  - **patch** (bug fixes, documentation)
- Prompt for a description of the changes

The changeset creates a Markdown file in the `.changeset` directory that will be used to generate the changelog and determine the version bump.

### 3. Committing and Pushing

Commit your changes along with the changeset file:

```bash
git add .
git commit -m "feat: add your feature with changeset"
git push -u origin feature/your-feature-name
```

### 4. Pull Request

Create a pull request to the `main` branch. When the PR is merged, the publishing workflow will automatically run.

## Automated Publishing Workflow

### GitHub Actions Process

The `.github/workflows/publish.yml` file defines our automated publishing process, which runs when changes are pushed to the `main` branch.

The workflow:

1. **Builds and verifies the package**:
   - Checks out the code
   - Sets up Node.js and PNPM
   - Installs dependencies
   - Runs linting and build commands
   - Verifies the build output

2. **Manages versioning and publishing**:
   - Uses the `changesets/action` to:
     - Detect any changeset files
     - Update package versions based on changesets
     - Generate/update changelog entries
     - Create GitHub releases
     - Publish packages to NPM

3. **Fallback publishing**:
   - If no changesets are found, it checks if the current version is already published
   - If the version is not on NPM, it publishes it

### Security Features

Our publishing workflow includes modern security features:

1. **NPM Provenance**:
   - Links the published package to the GitHub Actions workflow
   - Provides verification that the package was built from the specific commit

2. **Explicit Permissions**:
   - Uses the principle of least privilege
   - Only grants necessary GitHub token permissions

3. **Concurrency Controls**:
   - Prevents multiple publish workflows from running simultaneously
   - Cancels in-progress workflows when new ones are triggered

## Troubleshooting

### Common Issues

1. **GitHub Token Permissions**

If you see errors like:
```
Resource not accessible by integration
```

The GitHub token doesn't have sufficient permissions. Ensure:
- The workflow has proper permissions configured
- You have a `RELEASE_TOKEN` secret configured with write access for repositories and pull requests

2. **NPM Publishing Failures**

If packages fail to publish with:
```
npm ERR! 403 403 Forbidden - PUT https://registry.npmjs.org/@scope/package
```

Check:
- `NPM_TOKEN` secret is correctly configured
- Token has publish access to the organization/scope
- Package version is not already published

3. **Changeset Issues**

If changesets aren't working correctly:
- Verify the format of your changeset files
- Check the base branch configuration in `.changeset/config.json`
- Ensure the fetch-depth in the checkout action is 0 (to get full history)

## Manual Publishing (Emergency Only)

In rare cases where the automated process fails, you can publish manually:

```bash
# 1. Make sure you're on the main branch with latest changes
git checkout main
git pull

# 2. Authenticate with NPM
npm login

# 3. Version packages (applies changesets)
pnpm version-packages

# 4. Build the package
pnpm build

# 5. Verify the build
pnpm verify

# 6. Publish to NPM
pnpm release

# 7. Push version changes back to repository
git push --follow-tags
```

## Best Practices

1. **Always Use Changesets**
   - Document all significant changes with changesets
   - Write clear, user-focused changeset messages
   - Use appropriate version bumps based on semver

2. **Maintain Clean History**
   - Use consistent commit message format
   - Include changeset file in the same commit as code changes
   - Reference issue numbers in commit messages

3. **Version Responsibly**
   - Use major versions for breaking changes
   - Include migration guides for major version bumps
   - Update documentation alongside code changes

4. **Monitor Releases**
   - Watch GitHub Actions workflows for any failures
   - Verify published packages on NPM
   - Test the published package before announcing releases

## References

- [Changesets Documentation](https://github.com/changesets/changesets)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [NPM Package Provenance](https://docs.npmjs.com/generating-provenance-statements)
- [Semantic Versioning](https://semver.org/) 