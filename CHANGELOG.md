# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Fixed
- Updated build process to explicitly include `/` to invalidate cache paths

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


[Unreleased]: https://github.com/audseb/smutil/compare/v1.0.1...HEAD
[v1.0.1]: https://github.com/audseb/smutil/compare/v1.0.0...v1.0.1
[v1.0.0]: https://github.com/audseb/smutil/compare/42439791ca0a02465161df102260ae60efd66efb...v1.0.0
