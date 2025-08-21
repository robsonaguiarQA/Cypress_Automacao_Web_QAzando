/// <reference types="cypress" />
import commun_page from "../support/pages/commun_page";
import login_page from "../support/pages/login_page";
import { faker } from "@faker-js/faker";

const email = faker.internet.email();
const senha = faker.internet.password({ length: 6 });

describe ("Acessando a tela de login da aplicação", () => {

   beforeEach("Acessando tela de login de usuário", () => {
      commun_page.acessLoginPage()
    });

   it("Login com sucesso e validação da mensagem", () => {
     login_page.preencherEmailValido(email)
     login_page.preencherSenhaValida(senha)
     login_page.clicarLogin()
     login_page.checarMensagemCadastroRealizadosucesso(email)
    });
})