import React from "react";
import App from "../../src/App";

describe('<App/>', () => {
  it('render', () => {
    cy.mount(<App/>)
  })

  it("should have text nba teams",()=>{
    cy.mount(<App/>)
    cy.get('[data-cy=nba_teams]').should('have.text',"NBA TEAMS")
  })

  it("search based on years",()=>{
    cy.mount(<App/>)
    cy.get('[data-cy=search_bar]').type('2019')
    cy.get('[data-cy="team_name"]').should("contain","Clippers")
  })

  it("pagination_text",()=>{
    cy.mount(<App/>)
    cy.get('[data-cy=page_decrease]').should("contain","<")
    cy.get('[data-cy=page_increase]').should("contain",">")
    cy.get('[data-cy=current_page]').should("contain",1)
  })

  it("pagination_functionality",()=>{
    cy.mount(<App/>)
    cy.get('[data-cy=page_increase]').click()
    cy.get('[data-cy=current_page]').should("contain",2)
    cy.get('[data-cy=team_name]').should("contain","Celtics")
    cy.get("[data-cy=page_decrease]").click()
    cy.get("[data-cy=current_page]").should("contain",1)
  })

})