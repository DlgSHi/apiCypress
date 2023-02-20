describe('Get newly added Pet', () => {

  // intercept doesn't work with self calls :)
  it.skip('should get the newly added pet\'s name', () => {
    cy.intercept('GET', "/773", {
      body: 
        {
          id: '775',
          name: "Dog",
          status: "available"
        }}).as('pet')

        cy.getApi(773).should(resp => {
          expect(resp.body.id).to.equals(775)
        })
  });

  
});