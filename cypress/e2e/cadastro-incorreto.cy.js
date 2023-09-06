describe("Página de Cadastro", () => {
    it("Preencher os campos do fomulário de forma incorreta", () => {
  
      //Acessar a página
      cy.visit("https://3076-cypress-alurapic-front.vercel.app/#/home");
  
      //clicar no link com o texto "Register now"
      cy.contains('a',"Register now").click();
  
      //clicar 2x no botão de registro para exibir todas as mensagens de erro
      cy.get('[data-test="btnRegister"]').click();
      cy.get('[data-test="btnRegister"]').click();

    //verifica se as mensagens de erro estão visiveis
      cy.contains('Email is required!').should('be.visible');
      cy.contains('Full name is required!').should('be.visible');
      cy.contains('User name is required!').should('be.visible');
      cy.contains('Password is required!').should('be.visible');
    });
  });