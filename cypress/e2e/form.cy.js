describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3001')
})})




// describe('Get Name input', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3002/Form.js')
//     cy.contains('type').click()
//   })
// })


// cy.get('[data-cy="form-inputs-name"]').type(`${newItem}{enter}`)

it('can add names to form', () => {
  // We'll store our item text in a variable so we can reuse it
  const newItem = 'SweetPotato Bolosky'
  const newItem2 = 'SweetPotatoBolosky@gmail.com'
  const newItem3 = 'SPlovesPepperoni'

 
  // https://on.cypress.io/selecting-elements
  cy.visit('http://localhost:3001')

  cy.get('[data-cy="form-inputs-name"]').type(`${newItem}`)
    .should('be.visible')
  
  cy.get('[data-cy="form-inputs-email"]').type(`${newItem2}`)
  

  cy.get('[data-cy="form-inputs-password"]').type(`${newItem3}`)

  cy.get('[data-cy="form-check-terms"]').click()

  
  cy.get('[data-cy="submit"]').click()
  
    
})
