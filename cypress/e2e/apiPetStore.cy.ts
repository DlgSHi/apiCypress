describe('get newly added Pet', () => {

  before(() => {
    cy.fixture('pets.json').then(($json) => {
				cy.postApi($json);
		});
  });

	beforeEach(() => {
		cy.fixture('pets.json').then(($json) => {
				cy.getApi($json.id).as(`pet${$json.id}`);
		});
	});

	it('Validate the headers', () => {
		cy.get('@pet773')
			.its('headers')
			.its('content-type')
			.should('include', 'application/json');
	});

	it('Validate the status code', () => {
		cy.get('@pet773')
			.its('status')
			.should('equal', 200);
	});

	it('Validate the KittyCatPG\'s name', () => {
		cy.get('@pet773')
					.its('body')
					.should('include', { name: 'KittyCatPG' });
	});

	it('Validate the KittyCatPG\'s status', () => {
		cy.get('@pet773')
		.its('body')
		.should('include', { status: 'sold' });
	});

})