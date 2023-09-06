describe("API Alurapic", () => {
  it("Dados da API", () => {
    cy.request({
      method: "POST",
      url: "https://alurapic-api.onrender.com/user/login",
      body: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("id");
    });
  });

  it("Fotos do Usuário", () => {
    const tempoEsperado = Math.random() * 50;

    cy.request({
      method: "GET",
      url: "https://alurapic-api.onrender.com/photos/254",
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("description");
      expect(res.body.description).to.be.equal("Tiamat");
    });
  });
});
