describe('add new Pet', () => {

  const url = Cypress.config().baseURL;

  before(() => {
    cy.server();
    cy.fixture('pets.json').then(($json) => {
      $json.forEach(function (obj) {
        cy.request({
          method: 'POST',
          url: url,
          body: obj
        }).as('pets');
      })

    })
  });

  it('Validate the status code', () => {
    cy.get('@pets')
      .its('status')
      .should('equal', 200);
  });
})