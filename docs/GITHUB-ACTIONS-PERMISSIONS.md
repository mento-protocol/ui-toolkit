# GitHub Actions Permissions Guide

This document provides guidance on configuring proper permissions for GitHub Actions workflows, focusing specifically on resolving common permission issues with the publishing workflow.

## Understanding GitHub Actions Permissions

GitHub Actions workflows run with a set of permissions that determine what actions they can perform. These permissions are defined by:

1. **Repository Settings**: Global permissions for all workflows
2. **Workflow File**: Specific permissions defined in the workflow YAML
3. **Token Permissions**: The permissions granted to the GITHUB_TOKEN or custom tokens

## Common Permission Issues

### "Resource not accessible by integration"

This error typically occurs when GitHub Actions tries to perform an operation it doesn't have permission for. Common scenarios include:

1. **Creating Pull Requests**: The workflow tries to create a PR but lacks `pull-requests: write` permission
2. **Pushing to Protected Branches**: The workflow attempts to push to a branch with protection rules
3. **Creating Releases**: The workflow tries to create a release without `contents: write` permission

## Solution: Personal Access Token (PAT)

The most reliable solution is to create and use a Personal Access Token (PAT) with appropriate permissions:

### Creating a PAT

1. Go to your GitHub account settings
2. Select "Developer settings" > "Personal access tokens" > "Fine-grained tokens"
3. Click "Generate new token"
4. Set the appropriate permissions:
   - Repository permissions:
     - Contents: Read and write
     - Pull requests: Read and write
     - Workflows: Read and write
   - Organization permissions (if applicable):
     - Packages: Read and write
5. Copy the generated token

### Adding the PAT to Repository Secrets

1. Go to your repository settings
2. Select "Secrets and variables" > "Actions"
3. Click "New repository secret"
4. Name: `RELEASE_TOKEN`
5. Value: Paste your PAT
6. Click "Add secret"

### Using the PAT in Workflows

In your workflow file, use the PAT instead of the default GITHUB_TOKEN:

```yaml
- name: Create Release Pull Request or Publish
  uses: changesets/action@v1
  with:
    publish: pnpm release
  env:
    GITHUB_TOKEN: ${{ secrets.RELEASE_TOKEN }}
```

## Workflow Permissions Configuration

Our updated workflow in `.github/workflows/publish.yml` explicitly defines the required permissions:

```yaml
permissions:
  contents: write
  pull-requests: write
  packages: write
  id-token: write # For NPM provenance
```

### Fallback Approach

If you're still experiencing permission issues, you can use a hybrid approach:

1. First, try to use the PAT through the `RELEASE_TOKEN` secret
2. If that's not available, fall back to the standard `GITHUB_TOKEN`

```yaml
env:
  GITHUB_TOKEN: ${{ secrets.RELEASE_TOKEN || secrets.GITHUB_TOKEN }}
```

## Repository Settings

For the publishing workflow to function properly, check these repository settings:

1. **Workflow Permissions**
   - Go to repository settings > Actions > General
   - Under "Workflow permissions", select "Read and write permissions"
   - Check "Allow GitHub Actions to create and approve pull requests"

2. **Branch Protection Rules**
   - If your main branch has protection rules, ensure there's an exception for GitHub Actions
   - For publishing, consider adding "Allow specified actors to bypass required pull requests" and add the GitHub Actions bot

## Troubleshooting Steps

If you still encounter permission issues:

1. **Check Workflow Logs**
   - Identify exactly which operation is failing
   - Note the specific permission error message

2. **Verify Token Permissions**
   - Check that your PAT has the necessary permissions
   - Ensure the token hasn't expired

3. **Repository Settings**
   - Verify workflow permissions are correctly set
   - Check branch protection rules

4. **Try Manual Release**
   - If automation fails, follow the manual publishing process in `docs/PUBLISHING.md`

## References

- [GitHub Actions Permissions Documentation](https://docs.github.com/en/actions/security-guides/automatic-token-authentication)
- [Changesets Action Documentation](https://github.com/changesets/action)
- [Fine-grained PAT Documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) 