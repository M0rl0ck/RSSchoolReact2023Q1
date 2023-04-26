/// <reference types="cypress" />

describe("Form", () => {
  it("should visit", () => {
    cy.visit("/forms");
    cy.get("form").should("be.visible");
  });
  it("should be button", () => {
    cy.visit("/forms");
    cy.get("input[type='submit']");
  });
  it("show error input name", () => {
    cy.visit("/forms");
    cy.get("label:first-child input").should("have.value", "");
    cy.get("input[type='submit']").click();
    cy.get("label:first-child span").should(
      "have.text",
      "Name must be at least 3 characters"
    );
    cy.get("span").should("have.length", 7);
    cy.get("label:first-child input").should("have.value", "");
    cy.get("label").first().type("sergey");
    cy.get("label:first-child input").should("have.value", "sergey");
    cy.get("input[type='submit']").click();
    cy.get("label:first-child span").should(
      "have.text",
      "First name or last name must start with a capital letter"
    );
    cy.get("span").should("have.length", 7);
    cy.get("label:first-child input").clear();
    cy.get("label:first-child input").type("Sergey");
    cy.get("label:first-child input").should("have.value", "Sergey");
    cy.get("input[type='submit']").click();
    cy.get("span").should("have.length", 6);
  });
});
