describe('Check Histpry appointment', () => {

    before(() =>{
        cy.visit('http://52.74.162.217:8082/triangle/login?userName=')
    })

    function login(username ,password ){
        if(username == "Admin"){
            cy.get('[id$=-userName]').type("Admin")
        }else{
            cy.get('[id$=-userName]').type("John")
        }

        if(password == "admin"){
            cy.get('[id$=-password]').type("admin")
        }else{
            cy.get('[id$=-password]').type("password")
        }
    }


})