
var EC = protractor.ExpectedConditions;
var button = $("#xyz");
var isClickable = EC.elementToBeClickable(button);

describe("angular homepage todo list", function() {
    it("should add a todo", function() {
      browser.get("http://localhost:4200");
      browser.wait(isClickable, 5000);
      ngApimock.selectScenario("getStatus", "status OK");
      //var ele=;
      expect(element(by.id("xyz")).getText()).toEqual("OK");

    });
});
