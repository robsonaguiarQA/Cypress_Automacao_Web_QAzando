/// <reference types ="cypress" />

const elements = {

buttons : {
      btnRegister : '#btnRegister' },

fields: {
      name:'#user',
      email:'#email',
      password:'#password'},

mensagem: {
      errorDigitoIncorreto:'.errorLabel',      
      mensagemTituloCadastroRealizado:'#swal2-title',
      mensagemSubtituloSejaBemVindo:'#swal2-html-container'}
    }

export default {
clicarCadastrar(){
        cy.get(elements.buttons.btnRegister)
        .click()
    },
    
mensagemErro(mensagem){
      cy.get(elements.mensagem.errorDigitoIncorreto)
        .should('be.visible')
        .should('have.text', mensagem)
  },
preencheNome(name) {
      cy.get(elements.fields.name)
        .type(name)
  },
preencheEmail(email) {
      cy.get(elements.fields.email)
        .should('be.visible')
        .type(email)
  },

senhaInvalida() {
      cy.get(elements.fields.password)
        .should('be.visible')
        .clear()
        .click();
},  
senhaValida(senha){
      cy.get(elements.fields.password)
        .type(String(senha))
        .click()
  },

            // APAGAR DEPOIS  / SEM USO
checarMensagem(mensagem){
      cy.get(elements.mensagem.errorDigitoIncorreto)
        .should('have.text', mensagem)
  },
  
checarMensagemCadastroRealizado(name){
      cy.get(elements.mensagem.mensagemTituloCadastroRealizado)
        .should('have.text','Cadastro realizado!')
      cy.get(elements.mensagem.mensagemSubtituloSejaBemVindo)
        .should('have.text', `Bem-vindo ${name}`)
    }
}