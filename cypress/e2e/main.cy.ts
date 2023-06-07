/// <reference types="cypress" />

describe("Main page", () => {
  it("test Maine page", () => {
    cy.visit("/");

    cy.get(".card-container").should("have.length", 20).first().click();
    cy.get(".card-modal-wrapper");
    cy.get(".card-modal-container");
    cy.get(".card-container").should("have.length", 21);
    cy.get(".card-modal-wrapper span").click();
    cy.get(".card-container").should("have.length", 20);

    cy.get("input[type='search']").should("have.value", "").type("aaaa");
    cy.get("input[type='search']").should("have.value", "aaaa");
    cy.get("input[type='submit']").click();
    cy.get("input[type='search']").should("have.value", "aaaa");
    cy.get("p").should("have.text", "Sorry! Don't find elements");
    cy.get("input[type='search']").clear();
    cy.get("input[type='search']").should("have.value", "");
    cy.get("input[type='submit']").click();
    cy.get(".card-container");
  });
});
