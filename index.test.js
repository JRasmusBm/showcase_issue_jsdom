const JSDOM = require("jsdom").JSDOM;

function hasPassedExercise({ tests, progress: { css, javascript, html } }) {
  const { window } = new JSDOM(
    `<!DOCTYPE html><html>${css &&
      `<head><style>${css}</style></head>`}<body>${html}${javascript &&
      `<script>${javascript}</script>`}</body></html>`,
    { runScripts: "outside-only", url: "http://localhost" }
  );
  window.eval(`result = ${tests}`);
  return window.result;
}

describe("test", () => {
  it("should get the correct color", () => {
    expect(
      hasPassedExercise({
        tests: `window.getComputedStyle(
         window.document.getElementsByTagName("h1")
       )["color"] === "green"`,
        progress: {
          javascript: "",
          html: "<h1>Hello world!</h1>",
          css: "h1 { color: green; }",
        },
      })
    ).toBe(true);
  });
});
