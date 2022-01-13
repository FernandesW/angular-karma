
var EC = protractor.ExpectedConditions;
var button = $("#xyz");

describe("angular homepage todo list", function() {
    it("should add a todo",async function() {
      await browser.get("http://localhost:4200");
      await element(by.id("xyz"));
      await ngApimock.selectScenario("getStatus", "status OK");
      //var ele=;
      expect(element(by.id("xyz")).getText()).toEqual("OK");

    });
});
