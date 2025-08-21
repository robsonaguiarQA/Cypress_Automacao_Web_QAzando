/// <reference types ="cypress" />
import commun_page from "../support/pages/commun_page";
import login_page from "../support/pages/login_page";
import cadastro_usuario_page from "../support/pages/cadastro_usuario_page";
import { faker } from "@faker-js/faker";

const name = faker.name.fullName();
const email = faker.internet.email();
const senha = faker.number.int({ min: 100000, max: 200000 });

describe ("Acessando a tela de login da aplicação", () => {

   beforeEach("Acessando tela de login de usuário", () => {
      commun_page.acessLoginPage()
    });

   it.only("Login com sucesso e validação mensagem", () => {
     login_page.preencheEmailValido(email)
     cadastro_usuario_page.senhaValida(senha)
     login_page.clicarLogin()
     login_page.checarMensagemCadastroRealizadosucesso(email)
    
    });
})