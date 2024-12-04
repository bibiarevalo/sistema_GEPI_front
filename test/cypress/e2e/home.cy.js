describe("The Home Page", () => {
    it("Sucessfully loads", () => {
      cy.visit("http://localhost:5173/home");
      cy.wait(2000);
      cy.get("a").contains("Ir para perfil Repositor").click();
      cy.get("#email").type("bia@gmail.com", { delay: 100 });
      cy.get("#password").type("bia123", { delay: 100 });
      cy.get('button[type="submit"]').click();
      cy.wait(2000);
      
   

    });
  });