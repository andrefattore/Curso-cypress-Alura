describe("Página de Cadastro", () => {
  beforeEach(() => {
    //Acessar a página
    cy.visit("https://3076-cypress-alurapic-front.vercel.app/#/home");
  });

  const usuarios = require("../fixtures/usuarios.json");
  usuarios.forEach((usuario) => {
    it("Preencher os campos do fomulário e cadastrar um novo usuário", () => {
      //clicar no link com o texto "Register now"
      cy.contains("a", "Register now").click();

      //digitar e-mail
      cy.get('[data-test="email"]').type(usuario.email);

      //digitar nome completo
      cy.get('[data-test="fullName"]').type(usuario.fullName);

      //digitar username
      cy.get('[data-test="registerUserName"]').type(usuario.userName);

      //digitar senha
      cy.get('[data-test="registerPassword"]').type(usuario.password);

      //clicar no botão de registro
      cy.get('[data-test="btnRegister"]').click();
    });
  });
});
