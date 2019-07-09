# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [v1.0.6] - 2019-07-09

### Added
- Developer tools for app hosting and auto reloading on changes via `yarn watch` script (utilizes `nodemon`)

### Fixed
- Security fixes for specific node packages, namely `debug`, `handlebars`, and `js-yaml`

## [v1.0.5] - 2018-12-19

### Fixed
- Fixed layout of table options, checkbox sorting

## [v1.0.4] - 2018-12-19

### Added
- New `chmod` calculator, translating between octal and symbolic unix file/folder permissions

## [v1.0.3] - 2018-12-12

### Added
- Google Analytics tracking data
- Scheme for sharing constants in templates via `constants.js`
- Moving plugins to `plugins` dir

## [v1.0.2] - 2018-12-12

### Added
- Added `sitemap.xml` and `robots.txt` for SEO purposes

### Fixed
- Updated build process to explicitly include `/` to invalidate cache paths
- Changed collections API to ignore non-HTML files (for now)

## [v1.0.1] - 2018-12-12

### Added
- Added `buildinfo` param for future cache busting abilities

### Fixed
- Footer links were being generated in random order, added alpha sort

## [v1.0.0] - 2018-12-11

### Added
- Initial deployment of SM Util!
- Adds three simple utils: auth header Base64 encoder, case converter, and word/char counter
- Build script to validate builds and auto-deployer for commits to `stable`


[Unreleased]: https://github.com/audseb/smutil/compare/v1.0.6...HEAD
[v1.0.6]: https://github.com/audseb/smutil/compare/v1.0.5...v1.0.6
[v1.0.5]: https://github.com/audseb/smutil/compare/v1.0.4...v1.0.5
[v1.0.4]: https://github.com/audseb/smutil/compare/v1.0.3...v1.0.4
[v1.0.3]: https://github.com/audseb/smutil/compare/v1.0.2...v1.0.3
[v1.0.2]: https://github.com/audseb/smutil/compare/v1.0.1...v1.0.2
[v1.0.1]: https://github.com/audseb/smutil/compare/v1.0.0...v1.0.1
[v1.0.0]: https://github.com/audseb/smutil/compare/42439791ca0a02465161df102260ae60efd66efb...v1.0.0
