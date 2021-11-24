describe('My First Test', () => {

    it('Log out!', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        cy.get('#btn-make-appointment').click()
        cy.url().should('include' , '/profile.php#login')
        cy.get('#txt-username').type("John Doe")
        cy.get('#txt-password').type("ThisIsNotAPassword")
        cy.get('#btn-login').click()
        cy.url().should('include' , '/#appointment')

        cy.get('#menu-toggle').click()
        cy.get(':nth-child(6) > a').click()

        cy.get('h1').should('have.text' , 'CURA Healthcare Service')
        
    })

})