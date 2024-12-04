describe("The Home Page", () => {
    it("Sucessfully loads", () => {
      cy.visit("http://localhost:5173/home");
      cy.get("a").contains("Ir para perfil Repositor").click();
      // cy.contains('Sign In').click()
      // cy.url().should('include', '/signin')
      cy.get("#email").type("bia@gmail.com", { delay: 100 });
      cy.get("#password").type("bia123", { delay: 100 });
      cy.get('button[type="submit"]').click();
      cy.wait(2000);
      cy.contains("Adicionar novo EPI").click();
      cy.wait(2000);
      // cy.contains("Create Project").click();
      // cy.wait(2000);
      // cy.get("#name").type("testebase");
      // cy.wait(1000);
      // cy.get("#description").type("deu certo aeeee");
      // cy.wait(1000);
      // cy.get("#owner").select("biaFreitas");
      // cy.wait(1000);
      // cy.get("[data-cy=id-seletor").click().type("teste{enter}teste21{enter}");
      // cy.wait(1000);
      // cy.get("[data-cy=id-member").click().type("sda{enter}felipe{enter}");
      // cy.wait(1000);
      // cy.get('button[type="submit"]').contains("Create Project").click();
    });
  });