const { assert } = require("console")

describe('Brows web', () => {

    it('Open page login', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        cy.get('#txt-username').type("John Doe")
        cy.get('#txt-password').type("ThisIsNotAPassword")
        cy.get('#btn-login').click()
      
    })

    it("Mack appionment" , () =>{
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')

        cy.get('#txt-username').type("John Doe")
        cy.get('#txt-password').type("ThisIsNotAPassword")
        cy.get('#btn-login').click()

        cy.get('#combo_facility').select(2)
        cy.get('#appointment').click()
        cy.get(':nth-child(3) > .col-sm-4').click()
        cy.get('#txt_visit_date').type('11/23/2021')

        cy.get(':nth-child(5) > .col-sm-offset-3').click()
        
        cy.get('#txt_comment').click({force: true}).type('hi')
        cy.get('#btn-book-appointment').click()

        cy.url().should('include' , '/appointment.php#summary')

        //check value 
        cy.get('#facility').should('have.text' , 'Seoul CURA Healthcare Center')
        cy.get('#hospital_readmission').should('have.text' , 'No')
        cy.get('#program').should('have.text' , 'Medicaid')
    })
})