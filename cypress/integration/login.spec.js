import login from '../support/index'

describe('Login', () => {
	beforeEach(() => {
		cy.viewport('macbook-15')
	})
	it('Verify sign in page', () => {
		cy.visit('https://farmlab-integration-test.datana.ai')
		cy.get('#logo-login').should('be.visible')
		cy.get('div.label-wrapper').contains('USERNAME').should('be.visible')
		cy.get('#login-email-input').should('be.visible')
		cy.get('div.label-wrapper').contains('PASSWORD').should('be.visible')
		cy.get('#login-pass-input').should('be.visible')
		cy.get('#login-btn').should('be.visible')
	})
	it('Sign in success', () => {
		login('test@sertiscorp.com', 'bachbluebird')
		cy.url().should('include', '/home/sites')
		cy.get('#logo-home').should('be.visible')
		cy.get('#btn-setting').should('be.visible')
	})

	it('Sign in failure case: Not input username and password', () => {
		cy.clearCookie('project_id')
		login('', '')
		cy.contains('.login-form-error-message-container', 'Email or Password is incorrect.')
	})

	it('Sign in failure case: Not input username', () => {
		cy.clearCookie('project_id')
		login('', 'bachbluebird')
		cy.contains('.login-form-error-message-container', 'Email or Password is incorrect.')
	})

	it('Sign in failure case: Not input password', () => {
		cy.clearCookie('project_id')
		login('test@sertiscorp.com', '')
		cy.contains('.login-form-error-message-container', 'Email or Password is incorrect.')
	})

	it('Sign in failure case: wrong username', () => {
		cy.clearCookie('project_id')
		login('test1@sertiscorp.com', 'bachbluebird')
		cy.contains('.login-form-error-message-container', 'Email or Password is incorrect.')
	})

	it('Sign in failure case: wrong password', () => {
		cy.clearCookie('project_id')
		login('test@sertiscorp.com', 'test1235')
		cy.contains('.login-form-error-message-container', 'Email or Password is incorrect.')
	})

	it('Sign in failure case: wrong username and password', () => {
		cy.clearCookie('project_id')
		login('test1@sertiscorp.com', 'test1235')
		cy.contains('.login-form-error-message-container', 'Email or Password is incorrect.')
	})

	it('Sign in failure case: email regex fail', () => {
		cy.clearCookie('project_id')
		login('test1@sertis', 'bachbluebird')
		cy.contains('.login-form-error-message-container', 'Email or Password is incorrect.')
	})

	it('Sign in failure case: username is not in the system', () => {
		cy.clearCookie('project_id')
		login('test2@sertiscorp.com', 'bachbluebird')
		cy.contains('.login-form-error-message-container', 'Email or Password is incorrect.')
	})

	it ('Should logout if logout', () => {
		cy.clearCookie('project_id')
		login('test@sertiscorp.com', 'bachbluebird')
		cy.get('#btn-setting > .setting-button').click()
		cy.get('.signout-row-container > div').click()
		cy.url().should('eq', 'https://farmlab-integration-test.datana.ai/login')
	})
})