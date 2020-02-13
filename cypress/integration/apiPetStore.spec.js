const url = Cypress.config().baseURL;

beforeEach(() => {
	cy.server();
});

describe('get newly added Pet', () => {

	beforeEach(() => {
		cy.fixture('pets.json').then(($json) => {
			$json.forEach(function (obj) {
				cy.request({
					method: 'GET',
					url: `${url}${obj.id}`
				}).as(`pet${obj.id}`);
			})
		});
	});

	it('Validate the headers', () => {
		cy.get('@pet773')
			.its('headers')
			.its('content-type')
			.should('include', 'application/json');
		cy.get('@pet774')
			.its('headers')
			.its('content-type')
			.should('include', 'application/json');
	});

	it('Validate the status code', () => {
		cy.get('@pet773')
			.its('status')
			.should('equal', 200);
		cy.get('@pet774')
			.its('status')
			.should('equal', 200);
	});

	it('Validate the KittyCatPG\'s name', () => {
		cy.get('@pet773')
					.its('body')
					.should('include', { name: 'KittyCatPG' });
	});

	it('Validate the ElephantPG\'s name', () => {
		cy.get('@pet774')
					.its('body')
					.should('include', { name: 'ElephantPG' });
	});

	it('Validate the KittyCatPG\'s status', () => {
		cy.get('@pet773')
		.its('body')
		.should('include', { status: 'sold' });
	});

	it('Validate the ElephantPG\'s status', () => {
		cy.get('@pet774')
		.its('body')
		.should('include', { status: 'available' });
	});
})