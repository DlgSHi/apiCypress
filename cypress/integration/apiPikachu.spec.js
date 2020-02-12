describe('API Testing with Cypress', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon';

    beforeEach(() => {
        cy.server()
        cy.request('GET', `${url}/25`).as('pikachu');
        cy.log('@pikachu');
    });

    it('Validate the header', () => {
        cy.get('@pikachu')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8');
    });

    it('Validate the status code', () => {
        cy.get('@pikachu')
            .its('status')
            .should('equal', 200);
    });

    it('Validate the pokemon\'s name', () => {
        cy.get('@pikachu')
            .its('body')
            .should('include', { name: 'pikachu' });
    });
});