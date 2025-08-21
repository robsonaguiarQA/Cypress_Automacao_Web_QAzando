/// <reference types="cypress" />

const elements = {

buttons : {
      btnRegister : '#btnRegister' },

fields: {
      name:'#user',
      email:'#email',
      password:'#password'},

mensagem: {
      errorDigito:'.errorLabel',      
      mensagemTituloCadastroRealizado:'#swal2-title',
      mensagemSubtituloSejaBemVindo:'#swal2-html-container'}
}

export default {
clicarCadastrar(){
      cy.get(elements.buttons.btnRegister)
        .click()
      },
    
mensagemErro(mensagem){
      cy.get(elements.mensagem.errorDigito)
        .should('be.visible')
        .should('have.text', mensagem)
},
preencherNome(name) {
      cy.get(elements.fields.name)
        .type(name)
},
preencherEmail(email) {
      cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)
},

preencherSenhaInvalida() {
      cy.get(elements.fields.password)
        .should('be.visible')
        .clear()
        .click();
},  
preencherSenhaValida(senha){
      cy.get(elements.fields.password)
        .type(String(senha))
        .click()
},

checarMensagemCadastroRealizado(name){
      cy.get(elements.mensagem.mensagemTituloCadastroRealizado)
        .should('have.text','Cadastro realizado!')
      cy.get(elements.mensagem.mensagemSubtituloSejaBemVindo)
        .should('have.text', `Bem-vindo ${name}`)
    }
}