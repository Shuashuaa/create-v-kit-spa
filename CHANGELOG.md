# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-06-18

A modern, more resilient CLI. Fixes a Windows crash and reworks the prompts
with [@clack/prompts](https://github.com/bombshell-dev/clack).

### Fixed
- **Windows crash: `spawn php ENOENT`.** `php -v` was spawned without
  `shell: true`, so Node could not resolve the bare name `php` via PATH/PATHEXT
  and threw an unhandled `error` event — crashing the CLI even when PHP was
  installed. PHP detection now runs through the shell, handles the `error`
  event, and waits on process exit so a missing or quiet PHP can no longer hang
  or crash the prompt.
- **Non-deterministic completion output.** The success message printed via
  staggered `setTimeout` calls and could interleave with the closing frame. It
  is now synchronous with a fixed order: success → art → next steps → credits.

### Added
- **Arrow-key boilerplate selection** instead of typing a number, removing the
  `parseInt`/`NaN` failure mode.
- **Spinners** for the PHP scan and the project file copy.
- **`intro` / `outro` framing** and **Ctrl+C cancellation** handling.
- **In-prompt project-name validation** — rejects invalid path characters and
  names that already exist as a directory, before any files are written.
- **Non-interactive mode** for CI: a positional project name and a
  `--template` / `-t` flag skip the prompts.

### Changed
- All boilerplates are defined in a single `TEMPLATES` table shared by the
  selector, the path lookup, and the completion message.
- `tsconfig` now pins `include` to `src`, so a generated project left in the
  repo root can no longer be swept into the build.

### Removed
- Dead `count.ts` and `progress.ts` (the fake, timer-driven progress bar).
- Dependencies `cli-progress` and `ansi-colors`; added `@clack/prompts`.

## [1.0.12] - 2025

- Previous release. Added the generated file name to the installation output.

[1.1.0]: https://github.com/Shuashuaa/create-v-kit-spa/releases/tag/v1.1.0
