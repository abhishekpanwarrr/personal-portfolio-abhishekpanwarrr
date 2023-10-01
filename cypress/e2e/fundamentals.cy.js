/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Full app ', () => {
  it('Navbar tests', () => {
    cy.visit('https://abhishek.pro')
    cy.get("[data-cy='contact-btn']").should("be.visible")
    cy.get("[data-cy='theme-toggler']").should("be.visible").click().click()
  })
})