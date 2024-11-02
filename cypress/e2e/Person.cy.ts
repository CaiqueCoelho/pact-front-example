describe('template spec', () => {

  before(() => {
    cy.setupPact('ui-person-consumer', 'api-person-provider')
    cy.intercept('**/api/person', { fixture: 'person.json' }).as('getPerson')
  })

  it('passes', () => {
    cy.visit('http://localhost:3000')

    cy.contains('Sign In').click();
    cy.get('#username').type('leandro');
    cy.get('#password').type('admin123');  
    cy.contains('Login').click();

    cy.contains('leandro').should('be.visible')
    cy.visit('http://localhost:3000/admin/panel')
    cy.contains('Caíque').should('be.visible')
  })

  after(() => {
    cy.usePactWait(['getPerson'])
  })
})