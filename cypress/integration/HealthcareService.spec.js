const { assert } = require("console")

describe('Brows web', () => {
    it('Open homr page', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com')
        cy.get('#menu-toggle').click()
    })


    it('Open page login', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        cy.get('#txt-username').click(expect("John Doe").to.equal("John Doe"))
        cy.get('#txt-password').click(expect("ThisIsNotAPassword").to.equal("ThisIsNotAPassword"))
        cy.get('#btn-login').click()
    })

    it('test check text box page login', () => {
        let username = 'John Doe'
        let password = 'ThisIsNotAPassword'

        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        //cy.get(':nth-child(1) > .col-sm-8 > .input-group > .form-control')
        cy.get('#txt-username')
            // Still, nothing happens yet
            .then(($el) => {
                // this line evaluates after the .then executes
                username = $el.text()
            })

        cy.get('#txt-password')
            .then(($al) =>{
                password =$al.text()
            })

        if (username) {
            // evaluates immediately as undefined
            cy.contains('Username')
        }if(password){
            cy.contains('Password')
        } 
        else {
            cy.get('#btn-login').click()
        } 

    })

    it('put data username only' ,() =>{
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')

        let username = 'John Doe'
        cy.get('#txt-username').should(username)
    })
})