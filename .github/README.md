# GitHub Workflows

This directory contains GitHub Actions workflows for automating project tasks.

## Workflows

### `publish.yml`

This workflow handles automatic publishing to NPM when changes are merged to the main branch.

#### Workflow Details

- **Trigger**: Runs on push to the `main` branch, ignoring documentation files and workflow changes
- **Jobs**:
  - `publish`: Builds, verifies, and publishes the package to NPM

#### Process Flow

1. **Setup**: Prepares the environment with Node.js and pnpm
2. **Quality Checks**: Runs linting and type checking
3. **Build Process**: Cleans, builds, and verifies the package
4. **Version Management**: Uses Changesets to handle versioning
5. **Publishing**:
   - If changesets detects unpublished changes, it creates a release PR or publishes directly
   - If no changesets are present, it checks if the current version needs publishing

#### Required Secrets

- `NPM_TOKEN`: NPM authentication token with publish permissions
  - To create this token:
    1. Go to npmjs.com and log in
    2. Navigate to your profile → Access Tokens
    3. Create a new token with "Automation" type
    4. Add the token to your repository secrets in GitHub

#### Troubleshooting

If the workflow fails:

1. **Build Failures**: Check the logs for linting, type, or build errors
2. **Publish Failures**: Verify your NPM_TOKEN has proper permissions
3. **Version Conflicts**: Check if the version in package.json is already published

#### Manual Publishing

If you need to manually trigger the workflow:

1. Create a small change to the codebase
2. Push to a feature branch
3. Create a PR to main
4. Once merged, the workflow will automatically run

## Changesets Configuration

The publishing process uses [Changesets](https://github.com/changesets/changesets) to manage versioning.

### How to Use Changesets

1. Make your code changes
2. Run `pnpm changeset` to create a new changeset
3. Select the packages to include (for monorepos) 
4. Choose the version bump type (patch, minor, major)
5. Write a description of your changes
6. Commit the generated changeset file with your changes
7. When your changes are merged to main, the workflow will handle versioning and publishing

### Changeset Commands

- `pnpm changeset` - Create a new changeset
- `pnpm version-packages` - Apply changesets and update versions
- `pnpm release` - Publish packages updated by changesets 