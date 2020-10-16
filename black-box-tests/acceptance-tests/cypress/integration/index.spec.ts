describe('home page', () => {
  it('loads the page', () => {
    cy.visit('/', { auth: { username: 'username', password: 'password' } })
      .get('main')
      .should('contain', 'Hello :)')
      .should('contain', 'Nice stuff!')
  })
})
