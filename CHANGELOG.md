This file explains how Visual Studio created the project.

The following tools were used to generate this project:
- Angular CLI (ng)

The following steps were used to generate this project:
- Create Angular project with ng: `ng new theHub --defaults --skip-install --skip-git --no-standalone `.
- Create project file (`theHub.esproj`).
- Create `launch.json` to enable debugging.
- Create `nuget.config` to specify location of the JavaScript Project System SDK (which is used in the first line in `theHub.esproj`).
- Update package.json to add `jest-editor-support`.
- Update `start` script in `package.json` to specify host.
- Add `karma.conf.js` for unit tests.
- Update `angular.json` to point to `karma.conf.js`.
- Add project to solution.
- Write this file.
