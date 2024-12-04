describe("Exclusão de Funcionário", () => {
    it("Excluir Funcionário existente", () => {
        cy.visit("http://localhost:5173/excluir");
        cy.get('#matricula')
            .should('be.visible')
            .type('123456');
        cy.get('form').submit();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Funcionário excluído com sucesso!');
        });
    });
});

describe("Exclusão de EPI", () => {
    it("Excluir EPI existente", () => {
        cy.visit("http://localhost:5173/excluirEpi");
        cy.get('#id')
            .should('be.visible')
            .type('EPI123'); 
        cy.get('form').submit();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('EPI excluído com sucesso!');
        });
    });
});
