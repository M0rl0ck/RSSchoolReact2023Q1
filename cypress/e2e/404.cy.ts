describe("404 page", () => {
  it("open 404 page", () => {
    cy.visit("/breakUrl543");
    cy.get("h2")
      .should("have.text", "Uups! This page not exist!")
      .should("have.length", 1);
    cy.get("a")
      .last()
      .should("have.text", "Go home")
      .should("have.attr", "href", "/");
  });
});
