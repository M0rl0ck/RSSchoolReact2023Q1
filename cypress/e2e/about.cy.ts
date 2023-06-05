describe("Just open about page", () => {
  it("open about page", () => {
    cy.visit("/about");
    cy.get("h2").should("have.text", "About us").should("have.length", 1);
    cy.get("p").should("have.text", "Listen about us");
  });
});
