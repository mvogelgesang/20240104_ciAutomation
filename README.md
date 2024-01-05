# ciAutomation

Project will prototype a series of GitHub actions that can be used to automate workflows for ISV's

## Repository Setup Instructions

### Workflow Permissions

- In GitHub, go to Settings > Actions > General
- Under the Workflow Permissions heading, grant Read and Write permissions.
- Save

### Create Tokens

#### Personal Access Token (PAT)

[Personal Access Token](github.com/settings/tokens?type=beta)

- Grant access to specific repositories
- Grant the following permissions
  - Actions (Read & Write)
  - Code (Read & Write)
  - Commit Statuses (Read)
  - Metadata (Read)
  - Pull Requests (Read & Write)
  - Workflows (Read & Write)
- Name secret whatever you'd like
- Copy repository secret value to safe location. You will need access to it in the next step

#### Repository Secret

- Go to GitHub repository
- Settings > Secretes and Variables > Actions
- Create new Repository Secret named "ISV_SETUP_BEST_PRACTICES"
- Paste value from PAT
- Save
