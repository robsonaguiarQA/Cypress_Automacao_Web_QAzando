/// <reference types="cypress" />

export default {
    acessRegisterPage(){
    cy.visit('/')
        .get('#top_header')
    cy.get('.fa-lock')
        .click()   
    },

    acessLoginPage(){
    cy.visit('/')
    cy.get('.fa-user')
        .click() 
    },
}