/// <reference types ="cypress" />

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

preencheEmailInvalido(name) {
      cy.get(elements.fields.name)
        .should('be.visible')
        .type(name)
    },

preencheEmailValido(email) {
      cy.get(elements.fields.name)
        .should('be.visible')
        .type(email)
    },

validaMensagemEmailInvalido(mensagem){
      cy.get(elements.mensagem.mensagemCampoVazio)
        .should('be.visible')
        .should('have.text', mensagem);
    },

validaMensagemSenhaInválida(mensagem){
      cy.get(elements.mensagem.mensagemCampoVazio)
        .click()
        .should('be.visible')
        .should('contain.text', mensagem);
    },

     senhaInvalida() {
  cy.get(elements.fields.password)
    .should('be.visible')
    .type('12345')   
    .click();
},

checarMensagemCadastroRealizadosucesso(email){
      cy.get(elements.mensagem.mensagemTituloCadastroRealizado)
        .should('have.text','Login realizado')
      cy.get(elements.mensagem.mensagemSubtituloSejaBemVindo)
        .should('have.text', `Olá, ${email}`)
    }
}