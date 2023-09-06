describe("Página de Login", () => {

  beforeEach(() => {
    //Acessar a página
    cy.visit("https://3076-cypress-alurapic-front.vercel.app/#/home");

   cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login', {
    statusCode: 400
   }).as('stubPost');
  });

  it("Verificar Mensagem de campos obrigatórios", () => {

    //verifica se as mensagens de erro estão visiveis
    cy.contains("User name is required!").should("be.visible");
    cy.contains("Password is required!").should("be.visible");
  });

  it("Deve falhar mesmo com o preenchimento correto dos campos", () => {
    cy.login('joaozinho','senhas123');
    cy.wait('@stubPost')
  });
});
