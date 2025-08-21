/// <reference types ="cypress" />

import commun_page from "../support/pages/commun_page";
import login_page from "../support/pages/login_page";
import cadastro_usuario_page from "../support/pages/cadastro_usuario_page";
import { faker } from "@faker-js/faker";

const email = faker.internet.email();

describe ("Acessando a tela de login da aplicação", () => {

   beforeEach("Acessando tela de login de usuário", () => {
      commun_page.acessLoginPage()
    });

   it("Falha ao logar com E-mail vazio", () => {
      login_page.clicarLogin()
      login_page.validaMensagemEmailInvalido('E-mail inválido.')
     });

    it('Falha ao logar com email invalido ', () => {
      login_page.preencheEmailInvalido('Qualquer_email')
      login_page.clicarLogin()
      login_page.validaMensagemEmailInvalido('E-mail inválido.')
    });

    it('falha ao logar com senha vazia', () => {
      login_page.preencheEmailValido(email)
      cadastro_usuario_page.senhaInvalida()
      login_page.clicarLogin()
      login_page.validaMensagemSenhaInválida('Senha inválida.')
    });

    it('falha ao logar com senha invalida', () => {
      login_page.preencheEmailValido(email)
      login_page.senhaInvalida()
      login_page.clicarLogin()
      login_page.validaMensagemSenhaInválida('Senha inválida.')
    });
  });
