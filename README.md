# smutil [![CircleCI](https://circleci.com/gh/audseb/smutil.svg?style=svg)](https://circleci.com/gh/audseb/smutil)
> a collection of simple utilities


## Getting Started
Clone repo and run `yarn install`. To build the project, run `yarn build` to recompile changes.

## Deploying
Any commits to a branch will trigger a build via CircleCI. Commits resulting in a successful build to `stable` will trigger an automatic deployment to [smutil.com](https://smutil.com).

### Deployment Steps
To make a new build, make sure your branch is up to date (do this from `master`). Then:
1. Make sure to update the [CHANGELOG.md](CHANGELOG.md), specifying a new version.

   * This should reflect major items added, updated, or removed and deprecations in this release.
   * Be sure to update the release compare links at the bottom of the file.
   * Versions should follow the `v<MAJOR>.<MINOR>.<BUILD>` convention (e.g. [v1.0.0](https://github.com/audseb/smutil/releases/tag/v1.0.0)).

2. Push the new release tag to `stable` (replace `<TAG>` with your tag in the commands below). This will start a new build and release deployment, assuming build succeeds.

   ```git
   git pull
   git push origin <TAG>:stable
   ```

3. During deployment, compiled build assets are synced to an AWS S3 bucket. CloudFront, the content delivery network serving the app files hosted in S3, triggers cache invalidations based on items changed since the last build. This process takes between a few seconds to a few minutes; the returned cache invalidation status URL is logged in the [CircleCI process log](https://circleci.com/gh/audseb/smutil) for reference.

## Wishlist
A running list of utils to tackle, in no particular order:
* Spellchecker
* Text find/replace
* CSV to JSON <> JSON to CSV
* Remove empty lines/spaces from text
* Remove duplicate lines
* Sort text (alpha, reverse, by delimiter)
* Permutation generator (combinatorics algo's)
* Random number (define min, max), string (define chars, length) generators
* GUID/UUID generator
* Number/text to Binary and back
* Encrypt/decrypt text (optional password)
* List comparrison tool
