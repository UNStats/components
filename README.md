# @unstats/components

This library contains [React](https://facebook.github.io/react/) components that can be reused across web applications. None of these components manage state. State is managed in each web application.

## Explore

You can explore all components by launching the styleguide:

    yarn run styleguide

and open your browser at http://localhost:6060/. You can also explore the styleguide online: https://unstats.github.io/components/.

## Installation

This package is currently not published to [NPM](https://www.npmjs.com/). You can install the package directly from [GitHub](https://github.com/). Go to the [releases page](https://github.com/UNStats/components/releases) and look up the link to tarball `unstats-component-vX.Y.Z.tgz` of the latest release and run

    yarn add <link_to_tarball>

## Test

Testing is done with with [Jest](https://facebook.github.io/jest/) using [Enzyme](http://airbnb.io/enzyme/). Run

    yarn test

to execute all tests. In order to run a single test file, e.g. for debugging, you need to provide a pattern that matches the test file. For instance

    yarn test Dropdown

runs `src/Dropdown/Dropdown.test.jsx`. In order to run only specific tests within a test file, you can use
[`test.only`](https://facebook.github.io/jest/docs/api.html#testonlyname-fn) from Jest's API.

## Debugging

There are two things you might want to debug: components displayed in the style guide and tests. For each scenario you need to be able to place `debugger` statements in your code.

### Debugging Components

Debugging components is the same as debugging any other JavaScript code running in the browser. Set your breakpoints as needed in the component source code. Then open
[Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/) and switch to the **Sources** tab. The style guide is configured to create source maps that Chrome picks up to map between the actually running transpiled ES5 code and original ES6 source code for a seamless debugging experience.

### Debugging Tests

Tests do not run outside the browser with Node. After placing `debugger` statement in a test file, run

    yarn run test:debug <test-file>

to start a debugging session. Then launch `chrome://inspect` in Chrome and click on **inspect**. Chrome debugger pauses program execution at the first line. Click on **Resume script execution** to pause program execution on your first `debugger` statement.
