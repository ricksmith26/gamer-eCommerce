
describe('Cypress', () => {
    it('is working', () => {
      expect(true).to.equal(true)
    })
    it('visits the home', () => {
        cy.visit('/')
    })
    it('visits ps4 games and gets title', () => {
        cy.visit('/products/subcategory/PS4Games+1');
        const title = cy.get('#displayGridTitle');
        cy.get('#displayGridTitle').should('have.text', 'PS4 Games')
    })
  })