// test data
const obj = {
  "id": 221,
  "name": "crocodile",
  "status": "pending"
};
const objChange = {
  "id": 221,
  "name": "doggy",
  "status": "available"
};

let id;


describe('Add a new Pet', () => {


  it('should add new pet and check the status code', () => {
    cy.postApi(obj).as('post');
    cy.get('@post')
      .its('status')
      .should('equal', 200);
  });
});

describe('Get newly added Pet', () => {

  afterEach(() => {
    console.log(id, 'off test')
  })

  it('should get the newly added pet\'s name', () => {
    cy.getApi(obj.id).as('get');
    cy.get('@get').should((response) => {

      id = response.body.id

      console.log(id, 'in test')
      expect(response.body).to.have.property('id').to.equal(obj.id);
      expect(response.body).to.have.property('name').to.equal(obj.name);
      expect(response.body).to.have.property('status').to.equal(obj.status);
    });

    
  });
});

describe('Update newly added Pet', () => {

  it('should update pet\'s data', () => {
    cy.putApi(objChange).as('update');
    cy.get('@update').should((response) => {
      expect(response.body).to.have.property('name').to.equal(objChange.name);
      expect(response.body).to.have.property('status').to.equal(objChange.status);
    })
  });

  it('should update pet\'s data with old values', () => {
    cy.putApi(obj).as('update');
    cy.get('@update').should((response) => {
      expect(response.body).to.have.property('name').to.equal(obj.name);
      expect(response.body).to.have.property('status').to.equal(obj.status);
    })
  });
});

describe('Delete newly added Pet', () => {

  it('should delete pet\'s data', () => {
    cy.deleteApi(obj.id).as('delete');
    cy.get('@delete').should((response) => {
      expect(response.body).not.to.have.property('name').to.equal(obj.name);
      expect(response.body).not.to.have.property('status').to.equal(obj.status);
      expect(response.body).not.to.have.property('name').to.equal(objChange.name);
      expect(response.body).not.to.have.property('status').to.equal(objChange.status);
    })
  });
});