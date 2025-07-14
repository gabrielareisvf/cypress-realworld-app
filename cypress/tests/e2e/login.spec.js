// Successful Login
describe("Successful Login", () => {
  it("Should log in and show New Transaction page", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("[name='username']").type("Heath93");
    cy.get("[name='password']").type("s3cret");
    cy.get("button[type='submit']").click();
    cy.contains("Public").should("be.visible");
  });
});

// Fail Login
describe("Fail Login", () => {
  it("Should log in and show New Transaction page", () => {
    cy.visit("http://localhost:3000/signin");
    cy.get("[name='username']").type("GabiReis");
    cy.get("[name='password']").type("12345");
    cy.get("button[type='submit']").click();
    cy.contains("Username or password is invalid").should("be.visible");
  });
});
