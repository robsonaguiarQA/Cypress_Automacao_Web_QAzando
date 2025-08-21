/// <reference types="cypress" />

import commun_page from "../support/pages/commun_page";
import cadastro_usuario_page from "../support/pages/cadastro_usuario_page";
import { faker } from "@faker-js/faker";

const name = faker.name.fullName();
const email = faker.internet.email();
const senha = faker.number.int({ min: 100000, max: 200000 });

describe ("Cadastro de usuário", () => {

  beforeEach("Acessando tela de cadastro de usuário", () => {
    commun_page.acessRegisterPage()
  });

  it("Validar campo nome vazio", () => {
    cadastro_usuario_page.clicarCadastrar()
    cadastro_usuario_page.mensagemErro('O campo nome deve ser prenchido')
  });

  it("Validar campo email vazio", () => {
    cadastro_usuario_page.preencherNome(name)
    cadastro_usuario_page.clicarCadastrar()
    cadastro_usuario_page.mensagemErro('O campo e-mail deve ser prenchido corretamente')
  });

  it("Validar campo email invalido", () => {
    cadastro_usuario_page.preencherNome(name)
    cadastro_usuario_page.preencherEmail('email_invalido')
    cadastro_usuario_page.clicarCadastrar()
    cadastro_usuario_page.mensagemErro('O campo e-mail deve ser prenchido corretamente')
  });

  it("Validar campo senha inválido", () => {
    cadastro_usuario_page.preencherNome(name)
    cadastro_usuario_page.preencherEmail(email)
    cadastro_usuario_page.preencherSenhaInvalida()
    cadastro_usuario_page.clicarCadastrar()
  });

  it("Validar mensagem cadastro realizado com sucesso", () => {
    cadastro_usuario_page.preencherNome(name)
    cadastro_usuario_page.preencherEmail(email)
    cadastro_usuario_page.preencherSenhaValida(senha)
    cadastro_usuario_page.clicarCadastrar()
    cadastro_usuario_page.checarMensagemCadastroRealizado(name)
  });
});