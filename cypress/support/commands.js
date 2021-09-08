// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
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
