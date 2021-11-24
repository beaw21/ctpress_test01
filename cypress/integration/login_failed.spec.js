const { assert } = require("console")

describe('Brows web', () => {

    it('Open page login only username case username correct', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        cy.get('#txt-username').type("John Doe")
        cy.get('#btn-login').click()
        cy.get('.text-danger').should('have.text' , 'Login failed! Please ensure the username and password are valid.')
    })

    it('Open page login only password case password correct', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        cy.get('#txt-password').type("ThisIsNotAPassword")
        cy.get('#btn-login').click()
        cy.get('.text-danger').should('have.text' , 'Login failed! Please ensure the username and password are valid.')
    })

    it('Open page login only username case username not correct ', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        cy.get('#txt-username').type("John")
        cy.get('#btn-login').click()
        cy.get('.text-danger').should('have.text' , 'Login failed! Please ensure the username and password are valid.')
    })

    it('Open page login only password case password not correct', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        cy.get('#txt-password').type("Password")
        cy.get('#btn-login').click()
        cy.get('.text-danger').should('have.text' , 'Login failed! Please ensure the username and password are valid.')
    })

    it('Open page login username and password not corrent', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        cy.get('#txt-password').type("Password")
        cy.get('#btn-login').click()
        cy.get('.text-danger').should('have.text' , 'Login failed! Please ensure the username and password are valid.')
    })

})