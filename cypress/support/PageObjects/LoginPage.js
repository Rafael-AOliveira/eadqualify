class HomePage {

    baseUrl() {
        cy.visit("http://eadqualify.fasters.com.br/acesso");
    }

    inputVeluiEmail() {
        cy.get('.row > :nth-child(1) > :nth-child(1) > .control > input')
        .type(Cypress.env("Email"));
    }

    inputVeluiPassword(){
        cy.get('.senha > :nth-child(1) > .control > input')
        .type(Cypress.env("Password"));
    }

    clickButtonEnter(){
        cy.get(':nth-child(2) > .row > .col-md-5 > .btn')
        .click();
    }

    accessArea(){
        cy.get('h2[data-v-1faa6cb5=""]')
        .should('be.visible');
    }

    invalidEmail(){
        cy.get('.row > :nth-child(1) > :nth-child(1) > .control > input')
        .type('teste@teste.com'); 
    }

    invalidPassword(){
        cy.get('.senha > :nth-child(1) > .control > input')
        .type('teste');
    }

    failedMessage(){
        cy.get('.v-toast-text')
        .should('be.visible');
    }
}

export default new HomePage();