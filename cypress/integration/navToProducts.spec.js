describe('Navigates to the correct products', () => {
    it('visits ps4 games and gets title', () => {
        cy.visit('/products/subcategory/PS4Games+1');
        cy.get('#displayGridTitle').should('have.text', 'PS4 Games')
    })
    it('visits Action/Adventure PS4 Games', () => {
        cy.visit('/products/searchTerm/PS4Games/ActionAdventure+1');
        cy.get('#displayGridTitle').should('have.text', 'Action/Adventure PS4 Games')
    })
    it('visits Family/Kids PS4 Games', () => {
        cy.visit('/products/searchTerm/PS4Games/FamilyKids+2');
        cy.get('#displayGridTitle').should('have.text', 'Family/Kids PS4 Games')
    })
    it('visits ps4 games Fighting PS4 Games', () => {
        cy.visit('/products/searchTerm/PS4Games/Fighting+3');
        cy.get('#displayGridTitle').should('have.text', 'Fighting PS4 Games')
    })
    it('visits Horror PS4 Games', () => {
        cy.visit('/products/searchTerm/PS4Games/Horror+4');
        cy.get('#displayGridTitle').should('have.text', 'Horror PS4 Games')
    })
    it('visits Racing PS4 Games', () => {
        cy.visit('/products/searchTerm/PS4Games/Racing+5');
        cy.get('#displayGridTitle').should('have.text', 'Racing PS4 Games')
    })
    it('visits RPG PS4 Games', () => {
        cy.visit('/products/searchTerm/PS4Games/RPG+6');
        cy.get('#displayGridTitle').should('have.text', 'RPG PS4 Games')
    })
    it('visits Shooter PS4 Games', () => {
        cy.visit('/products/searchTerm/PS4Games/Shooter+7');
        cy.get('#displayGridTitle').should('have.text', 'Shooter PS4 Games')
    })
  })