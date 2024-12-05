describe("Cadastro de Funcionário", () => {
    it("Cadastrar Funcionário", () => {
        cy.visit("http://localhost:5173/cadastro");
        cy.get('#matricula')
            .should('be.visible')
            .type('123456')
        cy.get('#nome')
            .should('be.visible')
            .type('João Silva');
        cy.get('#email')
            .should('be.visible')
            .type('joao.silva@example.com');
        cy.get('form').submit();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Funcionário cadastrado com sucesso!');
        });
    });
});

describe("Cadastro de EPI", () => {
    it("Cadastrar EPI", () => {
        cy.visit("http://localhost:5173/cadastroEpi");
        cy.get('#id')
            .should('be.visible')
            .type('EPI123');
        cy.get('#nome')
            .should('be.visible')
            .type('Capacete de Segurança');
        cy.get('#tipo')
            .should('be.visible')
            .type('Proteção Individual');
        cy.get('#quantidade')
            .should('be.visible')
            .type('50');
        cy.get('form').submit();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Epi cadastrada com sucesso!');
        });
    });
});
