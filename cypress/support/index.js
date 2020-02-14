// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('uncaught:exception', (err, runnable) => false);

const url = Cypress.config().baseURL;

before(() => {
  cy.server();
})

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