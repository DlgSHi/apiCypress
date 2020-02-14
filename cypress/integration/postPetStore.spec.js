describe('add new Pet', () => {

  before(() => {
    cy.fixture('pets.json').then(($json) => {
      $json.forEach(function (obj) {
        cy.postApi(obj).as('pets');
      })
    })
  });

  it('Validate the status code', () => {
    cy.get('@pets')
      .its('status')
      .should('equal', 200);
  });
})