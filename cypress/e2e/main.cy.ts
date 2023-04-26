/// <reference types="cypress" />
// import "../support/component";

describe("Just open main page", () => {
  it("open Mine page", () => {
    cy.visit("/");
    // cy.request("/")
    //   .its("body")
    //   .then((html) => {
    //     const $h2 = Cypress.$(html).find("h2")[0];
    //     expect($h2).to.have.text("Main page");
    //     cy.state("document").write(html);
    //   });
    // cy.get("input[type='search']");
  });
});
// it("should be button", () => {
//   cy.visit("/forms");
//   cy.get("input[type='submit']");
// });
// });
