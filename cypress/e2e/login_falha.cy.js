/// <reference types="cypress" />

import commun_page from "../support/pages/commun_page";
import login_page from "../support/pages/login_page";
import { faker } from "@faker-js/faker";

const email = faker.internet.email();

describe ("Acessando a tela de login da aplicação", () => {

   beforeEach("Acessando tela de login de usuário", () => {
      commun_page.acessLoginPage()
    });

    it("Falha ao logar com E-mail vazio", () => {
      login_page.clicarLogin()
      login_page.validarMensagemEmailInvalido('E-mail inválido.')
     });

    it('Falha ao logar com E-mail inválido ', () => {
      login_page.preencherEmailInvalido('Qualquer_email')
      login_page.clicarLogin()
      login_page.validarMensagemEmailInvalido('E-mail inválido.')
    });

    it('Falha ao logar com senha vazia', () => {
      login_page.preencherEmailValido(email)
      login_page.senhaVazia()
      login_page.clicarLogin()
      login_page.validarMensagemSenhaInválida('Senha inválida.')
    });

    it('Falha ao logar com senha inválida', () => {
      login_page.preencherEmailValido(email)
      login_page.preencherSenhaInvalida()
      login_page.clicarLogin()
      login_page.validarMensagemSenhaInválida('Senha inválida.')
    });
  });
