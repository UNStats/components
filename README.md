# @unstats/components

This library contains [React](https://facebook.github.io/react/) components that can be reused across web applications. None of these components manage state. State is managed in each web application.

## Explore

You can explore all components by launching the catalog:

    yarn start

and open your browser at [http://localhost:4000/](http://localhost:4000/). You can also explore the catalog online: [https://unstats.github.io/components/](https://unstats.github.io/components/).

## Installation

This package is currently not being published to [NPM](https://www.npmjs.com/). You can install it directly from [GitHub](https://github.com/). Go to [releases page](https://github.com/UNStats/components/releases) and look up the link to tarball `unstats-component-vX.Y.Z.tgz` of the latest release and run

    yarn add <link_to_tarball>

## Test

Testing is done with with [Jest](https://facebook.github.io/jest/) using [react-testing-library](https://github.com/kentcdodds/react-testing-library). Run

    yarn test

to execute all tests. In order to run a single test file, e.g. for debugging, you need to provide a pattern that matches the test file:

    yarn test <pattern>

For instance

    yarn test Dropdown

runs `src/Dropdown/Dropdown.test.jsx`. In order to run only specific tests within a test file, you can use
[`test.only`](https://facebook.github.io/jest/docs/api.html#testonlyname-fn) from Jest's API.

## Debugging

There are two things you might want to debug: components displayed in the styleguide and tests. For each scenario you need to be able to place `debugger` statements in your code.

### Debugging Components

Debugging components is the same as debugging any other JavaScript code running in the browser. Set your breakpoints as needed in the component source code. Then open
[Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) and switch to the **Sources** tab. The styleguide is configured to create sourcemaps that Chrome picks up to map between the actually running transpiled ES5 code and original ES2015 source code for a seamless debugging experience.

### Debugging Tests

Tests run outside the browser with [Node](https://nodejs.org/en/). After placing `debugger` statement in a test file, run

    yarn run test:debug <pattern>

to start a debugging session. You can then attach a debugger to the running test with one of these two methods:

* In [Chrome](https://www.google.com/chrome/) launch a tab at `chrome://inspect` click on **inspect**.
* In [Visual Studio Code](https://code.visualstudio.com/) launch the `test:debug` launch configuration defined in folder `.vscode`.
