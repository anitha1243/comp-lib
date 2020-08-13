// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("login", (data) => {

    cy.visit(`${Cypress.env('baseUrl')}`)
    cy.get(data.loginEmailLoc)
        .type(`${Cypress.env('email')}`).should('have.value', `${Cypress.env('email')}`)
    cy.get(data.loginPwdLoc)
        .type(`${Cypress.env('password')}`).should('have.value', `${Cypress.env('password')}`)
    cy.get(data.loginBtnLoc).should('be.visible').click()
    cy.get(data.dashBdLinkLoc).should('be.visible')

})

Cypress.Commands.add("clickProfileTab", (profileTabLoc) => {

    cy.get(profileTabLoc).click()

})

Cypress.Commands.add("clickTab", (tabLoc) => {

    cy.contains(new RegExp(tabLoc,"g")).click()

})

Cypress.Commands.add("logout", (locators) => {

    cy.clickProfileTab(locators.profileTabLoc)
    cy.clickTab(locators.logoutTabLoc)

})

