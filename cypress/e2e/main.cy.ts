/// <reference types="cypress" />
// import "../support/component";

describe("Main page", () => {
  it("open Maine page", () => {
    cy.visit("/");
    cy.get("input[type='search']").should("have.value", "");
  });
  it("open modal card", () => {
    cy.visit("/");
    cy.get(".card-container").should("have.length", 20).first().click();
    cy.get(".card-modal-wrapper");
  });
  it("Shoud change search", () => {
    cy.visit("/");
    cy.get("input[type='search']").should("have.value", "").type("aaaa");
    cy.get("input[type='search']").should("have.value", "aaaa");
    cy.get("input[type='submit']").click();
    cy.get("input[type='search']").should("have.value", "aaaa");
    cy.get("p").should("have.text", "Sorry! Don't find elements");
  });
});
