

describe('App starts', () => {
    it('loads the desk page', () => {
        cy.visit('http://localhost:3000/#/desk')   
    }) 
    it('clicks the link "bomb manual"', function() {
        cy.visit('http://localhost:3000/#/info-tech-page')
        cy.contains('Wires').click()
    })
})