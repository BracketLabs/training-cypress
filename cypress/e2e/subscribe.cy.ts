describe("Newsletter Subscribe Form", () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Allow users to subscribe to the email list', () => {
        // data-test = email-input
        cy.getByData('email-input').type('test2@hotmail.com')
        cy.getByData('submit-button').click()
        cy.getByData('success-message')
          .should('exist')
          .contains('Success: test2@hotmail.com has been successfully subscribed')
    })

    it('Does NOT allow an invalid email address', () => {
        // data-test = email-input
        cy.getByData('email-input').type('test')
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('not.exist')
    })

    it('Does NOT allow previously submitted valid email address', () => {
        // data-test = email-input
        cy.getByData('email-input').type('john@example.com')
        cy.getByData('submit-button').click()
        cy.getByData('server-error-message')
          .should('exist')
          .contains('Error: john@example.com already exists. Please use a different email address.')
    })

})