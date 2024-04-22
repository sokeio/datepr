/// <reference types="node" />
import { readFileSync, existsSync } from "fs";

describe("build", () => {
  it("doesn't contain dev code", () => {
    if (existsSync("./dist")) {
      const dist = readFileSync("./dist/datepr.js");
      expect(dist.toString().indexOf("livereload")).toEqual(-1);
    }
  });
});
