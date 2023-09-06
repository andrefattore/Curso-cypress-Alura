describe("Página de Login", () => {
  beforeEach(() => {
    //Acessar a página
    cy.visit("https://3076-cypress-alurapic-front.vercel.app/#/home");
  });

  it("Preencher os campos e fazer login no sistema", () => {
    cy.login('joaozinho','senha123');
  });
});
