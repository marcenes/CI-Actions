describe('template spec', () => {
  it('passes', () => {
    cy.visit('localhost:5173/')
    cy.get("[data-qa='comment-input']").first().type('Teste 123')
    cy.get("[data-qa='publish-button']").first().click()
    cy.get("[data-qa='comment-text']").contains('Teste 123')
    cy.get("[data-qa='comment-text']").each(($element => {
      
      if($element.text() === 'Teste 123') {
        cy.get($element).siblings('header').children("[data-qa='delete-button']").click()
      }
    }))

  })
})