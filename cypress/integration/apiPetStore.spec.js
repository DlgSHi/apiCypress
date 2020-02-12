describe('data for Dog in PetStore using GET', () => {

  const url = Cypress.config().baseURL;

    beforeEach(() => {
        cy.server()
        cy.request('GET', `${url}99`).as('dog');
        cy.log('@dog');
    });

    it('Validate the headers', () => {
        cy.get('@dog')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json');
    });

    it('Validate the status code', () => {
        cy.get('@dog')
            .its('status')
            .should('equal', 200);
    });

    it('Validate the dog\'s name', () => {
        cy.get('@dog')
            .its('body')
            .should('include', { name: 'DoggiePG' });
    });

    it('Validate the dog\'s name', () => {
      cy.get('@dog')
          .its('body')
          .should('include', { status: 'available' });
  });
})

describe('add new Pet', () => {

  const url = Cypress.config().baseURL;

    beforeEach(() => {
        cy.server()
        cy.request({
          method: 'POST',
          url: url,
          body: {
              'id': 773,
              'name': 'KittyCatPG',
              'status': 'sold'
          }}).as('kitty');
        cy.log('@kitty');
    });

    it('Validate the headers', () => {
        cy.get('@kitty')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json');
    });

    it('Validate the status code', () => {
      cy.get('@kitty')
          .its('status')
          .should('equal', 200);
    });

    it('Validate the kitty\'s name', () => {
      cy.get('@kitty')
          .its('body')
          .should('include', { name: 'KittyCatPG' });
    });

    it('Validate the kitty\'s name', () => {
    cy.get('@kitty')
        .its('body')
        .should('include', { status: 'sold' });
    });
})

describe('get new added Pet', () => {

  const url = Cypress.config().baseURL;

    beforeEach(() => {
        cy.server()
        cy.request('GET', `${url}773`).as('kitty');
        cy.log('@kitty');
    });

    it('Validate the headers', () => {
        cy.get('@kitty')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json');
    });

    it('Validate the status code', () => {
      cy.get('@kitty')
          .its('status')
          .should('equal', 200);
    });

    it('Validate the kitty\'s name', () => {
      cy.get('@kitty')
          .its('body')
          .should('include', { name: 'KittyCatPG' });
    });

    it('Validate the kitty\'s name', () => {
    cy.get('@kitty')
        .its('body')
        .should('include', { status: 'sold' });
    });
})
