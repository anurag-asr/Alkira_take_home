///<reference types="Cypress"/>

describe('Checking the alkira application', () => {
  it('Should be able to visit the application url', () => {
    cy.visit('https://cerulean-starburst-b634d5.netlify.app')
  })

  it('Should have all the components', () => {
    cy.visit('https://cerulean-starburst-b634d5.netlify.app')
    cy.get(".group1").should("exist")
    cy.get(".nba_teams").should("exist")
    cy.get(".search_icon").should("exist")
    cy.get(".city").should("exist")
    cy.get("button").should("exist")
  })

  it('Should be able to perform pagination',()=>{
    cy.visit('https://cerulean-starburst-b634d5.netlify.app')
    cy.get(".Inc").click();
    cy.get(".Inc").click();
    cy.get(".Inc").click();
    cy.get(".page_end").should("have.text",4)
    cy.get(".page_int").should("have.text",4)

  })


})