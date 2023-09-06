import Cadastro from '../support/pages/pagina-cadastro/pagina-cadastro'

describe("Página de Cadastro", () => {
  it("Preencher os campos do fomulário e cadastrar um novo usuário", () => {
    //Acessar a página
    // cy.visit("https://3076-cypress-alurapic-front.vercel.app/#/home");
    //clicar no link com o texto "Register now"
    // cy.get('[data-test="register"]').click();
    //digitar e-mail
    // cy.get('[data-test="email"]').type('joaozinhogameplays@email.com');
    //digitar nome completo
    // cy.get('[data-test="fullName"]').type('João Gameplays');
    //digitar username
    // cy.get('[data-test="registerUserName"]').type('joaozinho');
    //digitar senha
    // cy.get('[data-test="registerPassword"]').type('senha123');
    //clicar no botão de registro
    // cy.get('[data-test="btnRegister"]').click();

    Cadastro.acessarPaginaDeCadastro();
    Cadastro.preencherFormCadastro();
    Cadastro.submeterCadastro();
  });
});
