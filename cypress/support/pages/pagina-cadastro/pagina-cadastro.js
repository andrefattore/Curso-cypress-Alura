const EL = require("./elements").ELEMENTS;

class Cadastro {
  acessarPaginaDeCadastro() {
    cy.visit("https://3076-cypress-alurapic-front.vercel.app/#/home");
    cy.get('[data-test="register"]').click();
  }

  preencherFormCadastro() {
    //digitar e-mail
    cy.get('[data-test="email"]').type("joaozinhogameplays@email.com");

    //digitar nome completo
    cy.get('[data-test="fullName"]').type("João Gameplays");

    //digitar username
    cy.get('[data-test="registerUserName"]').type("joaozinho");

    //digitar senha
    cy.get('[data-test="registerPassword"]').type("senha123");
  }

  submeterCadastro() {
    //clicar no botão de registro
    cy.get('[data-test="btnRegister"]').click();
  }
}

export default new Cadastro();