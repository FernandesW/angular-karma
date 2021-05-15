const express = require("express");
const path = require("path");
const ngApimock = require("ng-apimock")();
const app = express();

ngApimock.run({
    "src": "mockys",
    // tslint:disable-next-line: object-literal-sort-keys
    "outputDir": "output",
   // tslint:disable-next-line: no-empty
   "done": function() {},
});

app.set("port", (process.env.PORT || 3000));
app.use(require("ng-apimock/lib/utils").ngApimockRequest);
app.use("/mocking", express.static("output"));
// tslint:disable-next-line: no-console
console.log("Part 1 Executed of Concurrently");
app.listen(app.get("port"), function() {
    // tslint:disable-next-line: no-console
    console.log("app running on port", app.get("port"));
});
