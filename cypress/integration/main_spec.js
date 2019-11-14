describe('My First Test', function() {
	it('Visits the application', function() {
		cy.visit('/')
	})

	it('Finds the title', function() {
		cy.get('[data-cy=main-title]').contains('Transactions');
	})

	it('Waits and load the transaction card', () => {
		cy.get('[data-cy=loading]').contains('Loading');
		cy.get('[data-cy=transaction-card]').should('have.length', 16);
	})

	it('Click the refund button and change the state', () => {
		cy.get('[data-cy=refund-button]').click()
		cy.get('[data-cy=refunded-state]').contains('REFUNDED')
	})
})
