### P0

- Streamline the schemas and structure of CMS.
- Get rid of postbuild script in the iiitdwd for the sitemap. Use updated next-sitemap package and it's standalone config. (maybe or not)
- Bring consistency in naming conventions throughout the code and CI workflows.

### CI

- Resolve all linting and formatting issues!

  - Resolve all type errors.
  - Resolve all linting and formatting issues.
  - Update the configuration and CI to fail on any warnings or errors.
  - [ ] Enable `check-types` script in the husky pre-commit hook.

- Integrate the Sanity backup script.
  - [ ] [Legacy Github Workflow](https://github.com/Velocity-IIITDWD/iiitdwd.ac.in/blob/dev/.github/workflows/backup-sanity.yml)

### Miscellaneous

- Write and update the `README.md`.
- Update cursor rules.

### Ideating

- a new workflow where we zip the out dir, upload using ftp and then unzip on the server using a webhook which will be served by a php script.
