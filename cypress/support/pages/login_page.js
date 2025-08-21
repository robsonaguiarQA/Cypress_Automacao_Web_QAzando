/// <reference types="cypress" />

const elements = {

buttons : {
      btnLogin :'#btnLogin' 
      },
fields : {
      name:'#user',
      password:'#password'
    
      },
mensagem: {
      mensagemCampoVazio:'.invalid_input',
      errorDigitoIncorreto:'.errorLabel',      
      mensagemTituloCadastroRealizado:'#swal2-title',
      mensagemSubtituloSejaBemVindo:'#swal2-html-container'}
    }
export default {
clicarLogin(){
      cy.get(elements.buttons.btnLogin)
        .click();
},

preencherEmailInvalido(name) {
      cy.get(elements.fields.name)
        .should('be.visible')
        .type(name)
},

preencherEmailValido(email) {
      cy.get(elements.fields.name)
        .should('be.visible')
        .type(email)
},

validarMensagemEmailInvalido(mensagem){
      cy.get(elements.mensagem.mensagemCampoVazio)
        .should('be.visible')
        .should('have.text', mensagem);
},

validarMensagemSenhaInválida(mensagem){
      cy.get(elements.mensagem.mensagemCampoVazio)
        .click()
        .should('be.visible')
        .should('contain.text', mensagem);
},

preencherSenhaInvalida() {
      cy.get(elements.fields.password)
        .should('be.visible')
        .type('12345')   
        .click();
},
preencherSenhaValida(senha){
      cy.get(elements.fields.password)
        .type(String(senha))
        .click()
},

senhaVazia() {
      cy.get(elements.fields.password)
        .should('be.visible')
        .clear()
        .click();
},

checarMensagemCadastroRealizadosucesso(email){
      cy.get(elements.mensagem.mensagemTituloCadastroRealizado)
        .should('have.text','Login realizado')
      cy.get(elements.mensagem.mensagemSubtituloSejaBemVindo)
        .should('have.text', `Olá, ${email}`)
},
}