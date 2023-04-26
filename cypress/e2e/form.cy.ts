/// <reference types="cypress" />

describe("Just open form", () => {
  it("should visit", () => {
    cy.visit("/forms");
    // cy.request("/forms")
    //   .its("body")
    //   .then((html) => {
    //     const $li = Cypress.$(html).find("form");
    //     expect($li).to.have.property("length").equal(1);
    //     cy.state("document").write(html);
    //   });

    cy.get("form").should("be.visible");
  });
  it("should be button", () => {
    cy.visit("/forms");
    cy.get("input[type='submit']");
  });
});
