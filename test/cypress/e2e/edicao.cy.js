describe("Edição de Funcionário", () => {
    it("Editar Funcionário existente", () => {
    

        cy.visit(`http://localhost:5173/edicao`);

        cy.get('#nome')
            .should('be.visible')
            .clear()
            .type('João Silva');

        cy.get('#matricula')
            .type('123456');

        cy.get('#email')
            .should('be.visible')
            .clear()
            .type('joao.silva@example.com');


        cy.get('form').submit();


        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Funcionário atualizado com sucesso!');
        });
    });
});

describe("Edição de EPI", () => {
    it("Editar EPI existente", () => {



        cy.visit(`http://localhost:5173/edicaoEpi`);

        cy.get('#nome')
            .type(' Capacete');

        cy.get('#id')
            .should('be.visible')
            .type('EPI123');

        cy.get('#tipo')
            .should('be.visible')
            .type('Proteção de Cabeça');

        cy.get('#quantidade')
            .should('be.visible')
            .type('100');


        cy.get('form').submit();

        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('Epi atualizada com sucesso!');
        });
    });
});
