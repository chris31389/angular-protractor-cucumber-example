// e2e/app/app.steps.ts
import { When, Then, Before } from "cucumber";
import { expect } from "chai";
import { AppPage } from "./app.po";

let appPage: AppPage;

Before(() => (appPage = new AppPage()));

When("I got to the page", () => appPage.navigateTo());

Then("I see the title {string}", (expectedText: string) => {
  appPage
    .getParagraphText()
    .then(actualText => expect(actualText).to.equal(expectedText));
});