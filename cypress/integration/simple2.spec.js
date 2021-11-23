describe('Brows web', () => {
    it('Open homr page', () => {
        cy.visit('https://example.cypress.io')
        cy.title().should('include', 'Kitchen Sink')
        cy.get('h1').should('have.text','Kitchen Sink' )
    })

    it('Click buttom focus', () => {
        cy.visit('https://example.cypress.io')

        cy.get(':nth-child(3) > ul > :nth-child(2)').click()
        cy.contains('focus').click()
    })
})