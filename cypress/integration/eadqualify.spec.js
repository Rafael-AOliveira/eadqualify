import homePage from "../support/PageObjects/LoginPage"



describe('EAD QUALIFY', () => {

    beforeEach(() => {

        cy.clearLocalStorage();
        cy.clearCookies();

    });


    it('LOGIN SUCCESS', () => {

        homePage.baseUrl();

        homePage.accessArea();

        homePage.inputVeluiEmail();

        homePage.inputVeluiPassword();

        homePage.clickButtonEnter();

    });

    it('LOGIN INVALID EMAIL', () => {

        homePage.baseUrl();

        homePage.invalidEmail();

        homePage.invalidPassword();

        homePage.clickButtonEnter();

        homePage.failedMessage();

    });
});
