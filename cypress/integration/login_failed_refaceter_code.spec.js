const { assert } = require("console")

describe('Brows web', () => {

    
    before(() =>{
        cy.visit('https://katalon-demo-cura.herokuapp.com/profile.php#login')
    })

    function login(username ,password ){
        if(username == "John Doe"){
            cy.get('#txt-username').type("John Doe")
        }else{
            cy.get('#txt-username').type("John")
        }

        if(password == "ThisIsNotAPassword"){
            cy.get('#txt-password').type("ThisIsNotAPassword")
        }else{
            cy.get('#txt-password').type("password")
        }
    }

    function clickLogin(btnLogin){
        cy.get('#btn-login').click(btnLogin)
    }

    it('Open page login only username case username correct', () => {
        login("John Doe" , "" )
        clickLogin()
    })

    it('Open page login only password case password correct', () => {
        login("" , "ThisIsNotAPassword" )
        clickLogin()
    })

    it('Open page login only username case username not correct ', () => {
        login("John Doe" , "dadas" )
        clickLogin()
    })

    it('Open page login only password case password not correct', () => {
        login("bill" , "ThisIsNotAPassword" )
        clickLogin()
    })

    it('Open page login username and password not corrent', () => {
        login("buill" , "Thisword" )
        clickLogin()
    })

    after(()=>{
        cy.get('.text-danger').should('have.text' , 'Login failed! Please ensure the username and password are valid.')
        console.log(cy.get('.text-danger'))
    })
})