describe('add, update, delete new Pet', () => {
  const obj = {
    "id": 775,
    "name": "Dupka",
    "status": "pending"
  },
  objChange = {
    "id": 775,
    "name": "test",
    "status": "available"
  }

  it('Add new pet and check the status code', () => {
    cy.postApi(obj).as('post');
    cy.get('@post')
      .its('status')
      .should('equal', 200);
  });

  it('Get the newly added pet\'s name', () => {
    cy.getApi(obj.id).as('get');
		cy.get('@get')
					.its('body')
          .should('include', { name: obj.name })
          .and('include', { status: obj.status });
  });

  it('Update pet\'s data', () => {
    cy.putApi(objChange).as('update');
		cy.get('@update')
					.its('body')
          .should('include', { name: objChange.name })
          .and('include', { status: objChange.status});
  });

  it('Delete pet\'s data', () => {
    cy.deleteApi(obj.id).as('delete');
		cy.get('@delete')
					.its('body')
          .should('not.include', { name: objChange.name })
          .and('not.include', { status: objChange.status});
  });
})