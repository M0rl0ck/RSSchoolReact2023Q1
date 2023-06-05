/// <reference types="cypress" />

describe("Form", () => {
  it("test Form page", () => {
    cy.visit("/forms");
    cy.get("form").should("be.visible");
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
    cy.get("label span")
      .first()
      .should(
        "have.text",
        "First name or last name must start with a capital letter"
      );
    cy.get("span").should("have.length", 7);
    cy.get("label:first-child input").clear();
    cy.get("label:first-child input").type("Sergey");
    cy.get("label:first-child input").should("have.value", "Sergey");
    cy.get("input[type='submit']").click();
    cy.get("span").should("have.length", 6);

    cy.get("label span").first().should("have.text", "Please set date");
    cy.get("input[type='date']").type("2100-12-12");
    cy.get("input[type='submit']").click();
    cy.get("label span").first().should("have.text", "Invalid date");
    cy.get("input[type='date']").clear();
    cy.get("input[type='date']").type("1974-12-12");
    cy.get("input[type='submit']").click();
    cy.get("span").should("have.length", 5);

    cy.get("label span").first().should("have.text", "Please choose country");
    cy.get("select").select("USA");
    cy.get("input[type='submit']").click();
    cy.get("span").should("have.length", 4);

    cy.get("label span")
      .first()
      .should("have.text", "To continue, you must select");
    cy.get("input[type='checkbox']").check();
    cy.get("input[type='submit']").click();
    cy.get("span").should("have.length", 3);

    cy.get("input[type='radio']").first().check();
    cy.get("input[type='submit']").click();
    cy.get("span").should("have.length", 2);

    cy.get("input[type=file]").selectFile("./cypress/e2e/sun.png");
    cy.get("input[type='submit']").click();

    cy.get(".card-modal-container h2").should(
      "have.text",
      "The card has been created"
    );
    cy.get(".card-modal-wrapper span").click();
    cy.get(".form__card-container").should("have.length", "1");

    cy.get("label:first-child input").type("Nataly");
    cy.get("input[type='date']").type("1974-11-30");
    cy.get("select").select("Canada");
    cy.get("input[type='checkbox']").check();
    cy.get("input[type='radio']").last().check();
    cy.get("input[type=file]").selectFile("./cypress/e2e/sun.png");
    cy.get("input[type='submit']").click();
    cy.get(".form__card-container").should("have.length", "2");
  });
});
