describe('Check Histpry appointment', () => {

    before(() =>{
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
        cy.get('#txt-username').type("John Doe")
        cy.get('#txt-password').type("ThisIsNotAPassword")
        cy.get('#btn-login').click()
    })

    function bookAppointment(Facility,ApplyForHospitalReadmission,HealthcareProgram,VisitDate,Comment){
        cy.get('#combo_facility').select(Facility)
        if(ApplyForHospitalReadmission == 1){
            cy.get('.checkbox-inline').click()
        }else{}
        if(HealthcareProgram == 'Medicare' ){
            cy.get(':nth-child(3) > .col-sm-4 > :nth-child(1)').click()
        }if(HealthcareProgram == 'Medicaid' ){
            cy.get('.col-sm-4 > :nth-child(2)').click()
        }else{
            cy.get('.col-sm-4 > :nth-child(3)').click()
        }
        cy.get('#txt_visit_date').type(VisitDate)
        if(Comment == 1){
            cy.get('#txt_comment').click({ force: true }).type("Hello word")
        }else{}
    }

    function cilckBackToAppointmentPage(btnBook,url,btnHome){
        cy.get('#btn-book-appointment').click(btnBook)
        cy.url(url).should('include' , '/appointment.php#summary')
        cy.get('.text-center > .btn').click(btnHome)
    }

    function cilckMenuGoToHistoryPage(btnMenu,btnHistory,urlHistorypage){
        //click menu bar go to btn history
        cy.get('#menu-toggle > .fa').click(btnMenu)
        cy.get(':nth-child(4) > a').click(btnHistory)
        cy.url(urlHistorypage).should('include' , '/history.php#history')
    }
    it('book appionment', () => {
        //part
        bookAppointment( 0, 1, 'Medicare' , '23/8/1997' , 0)
        cilckBackToAppointmentPage()
        //present
        bookAppointment( 1, 0, 'Medicaid' , '11/2/2021' , 1)
        cilckBackToAppointmentPage()
        //Future
        bookAppointment( 1, 0, 'Medicaid' , '21/5/3031' , 1)
        cilckBackToAppointmentPage()
        //cilck history
        cilckMenuGoToHistoryPage()
    })

    after(()=>{
        //card css 
        cy.get('.container > :nth-child(2)').should('have.length' , 1)
        cy.get('.container > :nth-child(2) > :nth-child(1)').should('have.length', 1)
        //check data out put
        cy.get(':nth-child(1) > .panel > .panel-body > :nth-child(2) > #facility').should('have.text' ,'Tokyo CURA Healthcare Center' )
        cy.get(':nth-child(2) > .panel > .panel-body > :nth-child(2) > #facility').should('have.text' , 'Hongkong CURA Healthcare Center')
    })
})