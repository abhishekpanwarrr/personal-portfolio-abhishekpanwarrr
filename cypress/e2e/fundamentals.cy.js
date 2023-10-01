/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Full app tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Navbar tests", () => {
    cy.get("[data-cy='contact-btn']").should("be.visible");
    cy.get("[data-cy='theme-toggler']").should("be.visible").click().click();
  });
  it("Header tests", () => {
    cy.get("[data-cy='dev-name']").should("be.visible");
    // cy.get("FRONT-END DEVELOPER").should("be.visible")
  });
  // About tests
  it("About tests", () => {
    cy.get('[data-cy="about-heading"]').should("be.visible");
    cy.get('[data-cy="about-para"]').should("be.visible");
  });
  // Projects tests
  it("Project tests", () => {
    cy.get('[data-cy="project-title"]').should("be.visible");
    cy.get('[data-cy="github-link"]').should("be.visible").first();
  });
  // Skills tests
  it("Skills tests", () => {
    cy.get(".skills > h1").should("be.visible");
    cy.get(".skills-container")
      .should("be.visible")
      .within(() => {
        cy.get("svg").should("have.length", 6);
      });
  });
});
