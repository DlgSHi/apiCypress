describe('add new Pet', () => {

  before(() => {
    cy.fixture('pets.json').then(($json) => {
        cy.postApi($json).as('pets');
    })
  });

  it('Validate the status code', () => {
    cy.get('@pets')
      .its('status')
      .should('equal', 200);
  });
})