describe('Check Histpry appointment', () => {
    it('Open page appointment check book', () => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        cy.get('#txt-username').type("John Doe")
        cy.get('#txt-password').type("ThisIsNotAPassword")
        cy.get('#btn-login').click()
        cy.get('#menu-toggle').click()
        
        //book appointment case 1
        cy.get('#combo_facility').select(1)
        cy.get('.col-sm-4 > :nth-child(2)').click()
        cy.get('#txt_visit_date').type("24/11/2021")
        cy.get(':nth-child(5) > .col-sm-offset-3').click()
        cy.get('#btn-book-appointment').click()

        //btn back page book appointment
        cy.get('.text-center > .btn').click()

        //book appointment case 2
        cy.get('#combo_facility').select(2)
        cy.get(':nth-child(3) > .col-sm-4 > :nth-child(1)').click()
        cy.get('#txt_visit_date').type("24/11/2021")
        cy.get(':nth-child(5) > .col-sm-offset-3').click()
        cy.get('#btn-book-appointment').click()

        //btn menus 
        cy.get('#menu-toggle > .fa').click()
        cy.get(':nth-child(4) > a').click()

        cy.url().should('include' , '/history.php#history')

        //check history
        cy.get(':nth-child(1) > .panel > .panel-body > :nth-child(1) > label').should('have.text' , 'Facility')
        cy.get(':nth-child(1) > .panel > .panel-body > :nth-child(4) > label').should('have.text' ,'Apply for hospital readmission')
        cy.get(':nth-child(1) > .panel > .panel-body > :nth-child(7) > label').should('have.text' , 'Healthcare Program')
        cy.get(':nth-child(1) > .panel > .panel-body > :nth-child(10) > label').should('have.text' , 'Comment')

        //btn back home page
        cy.get('.text-center > .btn').click()
    })
})