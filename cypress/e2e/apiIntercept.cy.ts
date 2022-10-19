describe('Get newly added Pet', () => {

  it.skip('should get the newly added pet\'s name', () => {
    // cy.getApi(obj.id).as('get');
    // cy.get('@get').should((response) => {
    //   expect(response.body).to.have.property('id').to.equal(obj.id);
    //   expect(response.body).to.have.property('name').to.equal(obj.name);
    //   expect(response.body).to.have.property('status').to.equal(obj.status);
    // });

    cy.intercept('1', {
      body: 
        { 
          id: '773',
          name: "KittyCatPG",
          status: "sold"
        }}).as('pet')

        cy.getApi('@pet')
  });

  
});