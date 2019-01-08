## Reproduction of Issue with JSDOM in Node Environment

I am attempting to create a back-end for a service that helps users learn to
use basic web technologies. I want to use test expressions defined as strings
to check whether or not the exercise passed.

Conform
[this article](https://github.com/jsdom/jsdom/wiki/Don't-stuff-jsdom-globals-onto-the-Node-global)
I created the script `index.test.js`.

### To run the reproduction

1. `npm i`
2. `npm run test`

### Expected result

The test should not throw an error. It should either succeed, or fail saying
because `rgb(0, 128, 0) !== "green"`. See the following
[jsbin](https://jsbin.com/baxezaf/1/edit?html,console,output) for an example
of how it works in the browser.

### Actual result

```
FAIL  ./index.test.js
  test
    ✕ should get the correct color (59ms)

  ● test › should get the correct color

    TypeError: Cannot read property '_nwsapiDontThrow' of undefined

      at Object.<anonymous>.exports.matchesDontThrow (node_modules/jsdom/lib/jsdom/living/helpers/selectors.js:10:17)
      at setPropertiesFromRule (node_modules/jsdom/lib/jsdom/browser/Window.js:512:72)
      at forEach.call.rule (node_modules/jsdom/lib/jsdom/browser/Window.js:528:11)
          at Array.forEach (<anonymous>)
      at readStylesFromStyleSheet (node_modules/jsdom/lib/jsdom/browser/Window.js:522:15)
      at Window.getComputedStyle (node_modules/jsdom/lib/jsdom/browser/Window.js:533:5)
      at eval (eval at hasPassedExercise (index.test.js:10:10), <anonymous>:1:17)
          at eval (<anonymous>)
      at eval (index.test.js:10:10)
      at Object.hasPassedExercise (index.test.js:17:7)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.961s, estimated 2s
```
