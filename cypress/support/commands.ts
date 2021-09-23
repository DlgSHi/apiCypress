declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Create pet using POST method
       * @example
       * cy.postApi(body)
       * @param {Object} body - body object to create a Pet
       */
      postApi(body: object): Chainable<any>
      /**
       * Update pet using PUT method
       * @example
       * cy.putApi(body)
       * @param {Object} body - body object to create a Pet
       */
      putApi(body: object): Chainable<any>
      /**
       * Get pet by ID using GET method
       * @example
       * cy.getApi(id)
       * @param {Number} ID - Pet's ID
      */
      getApi(id: Number): Chainable<any>
      /**
       * Delete pet using DELETE method
       * @example
       * cy.deleteApi(id)
       * @param {Number} ID - Pet's ID
      */
      deleteApi(body: object): Chainable<any>
    }
  }
}

Cypress.on('uncaught:exception', (err, runnable) => false);

const url = Cypress.config().baseUrl;

Cypress.Commands.add('postApi', (body) => {
  cy.request({
    method: 'POST',
    url: url,
    body: body
  });
});

Cypress.Commands.add('getApi', (id) => {
  cy.request({
    method: 'GET',
    url: `${url}${id}`
  });
});

Cypress.Commands.add('putApi', (body) => {
  cy.request({
    method: 'PUT',
    url: url,
    body: body
  });
});

Cypress.Commands.add('deleteApi', (id) => {
  cy.request({
    method: 'DELETE',
    url: `${url}${id}`,
  });
});

export {}
