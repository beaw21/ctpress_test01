describe('Check Histpry appointment', () => {

    before(() =>{
        cy.visit('http://52.74.162.217:8082/triangle/login?userName=')
    })

    function login(username ,password ){
        if(username == "User1"){
            cy.get('[id$=userName]').type("User1")
        }else{
            cy.get('[id$=userName]').type("John")
        }

        if(password == "user"){
            cy.get('[id$=password]').type("user")
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

    it('test user EquilateralTriangle ', () => {
        login("User1" , "user" )
        clickLogin()
        cy.get('[id$=a]').type("5")
        cy.get('[id$=b]').type("5")
        cy.get('[id$=c]').type("5")
        clickTriangle()
        clear()
    })

    it('test user IsoscelesTriangle ', () => {
        
        cy.get('[id$=a]').type("5")
        cy.get('[id$=b]').type("5")
        cy.get('[id$=c]').type("7")
        clickTriangle()
        clear()

    })

    it('test user ScaleneTriangle ', () => {
        cy.get('[id$=a]').type("7")
        cy.get('[id$=b]').type("7")
        cy.get('[id$=c]').type("3")
        clickTriangle()
        clear()

    })

    it('test user NotTriangle ', () => {
        cy.get('[id$=a]').type("7.0")
        cy.get('[id$=b]').type("8.0")
        cy.get('[id$=c]').type("9.0")
        clickTriangle()
        cy.get('.error').should('have.text' , 'Stupid put the value in all boxes')
    })

})