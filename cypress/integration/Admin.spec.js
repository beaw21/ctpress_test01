describe('Check Histpry appointment', () => {

    before(() =>{
        cy.visit('http://52.74.162.217:8082/triangle/login?userName=')
    })

    function login(username ,password ){
        if(username == "Admin"){
            cy.get('[id$=userName]').type("Admin")
        }else{
            cy.get('[id$=userName]').type("John")
        }

        if(password == "admin"){
            cy.get('[id$=password]').type("admin")
        }else{
            cy.get('[id$=password]').type("password")
        }
    }

    function clickLogin(btnLogin){
        cy.get('[id$=LoginButton]').click(btnLogin)
    }

    function clickTriangle(btnTr){
        cy.get('#check').click(btnTr)
    }

    function clear(){
        cy.get('[id$=a]').clear()
        cy.get('[id$=b]').clear()
        cy.get('[id$=c]').clear()
    }

    it('testAdminEquilateralTriangle ', () => {
        login("Admin" , "admin" )
        clickLogin()
        cy.get('[id$=a]').type("5")
        cy.get('[id$=b]').type("5")
        cy.get('[id$=c]').type("5")
        clickTriangle()
        clear()
    })

    it('testAdminIsoscelesTriangle ', () => {
        
        cy.get('[id$=a]').type("5")
        cy.get('[id$=b]').type("5")
        cy.get('[id$=c]').type("5")
        clickTriangle()
        clear()

    })

    it('testAdminScaleneTriangle ', () => {
        cy.get('[id$=a]').type("7")
        cy.get('[id$=b]').type("7")
        cy.get('[id$=c]').type("3")
        clickTriangle()
        clear()

    })

    it('testAdminNotTriangle ', () => {
        cy.get('[id$=a]').type("7.0")
        cy.get('[id$=b]').type("8.0")
        cy.get('[id$=c]').type("9.0")
        clickTriangle()
        cy.get('.error').should('have.text' , 'Stupid put the value in all boxes')
        //cy.get('[data-layer="Content"]').should('have.text' , 'Stupid Put The Value In All Boxes')
    })


})