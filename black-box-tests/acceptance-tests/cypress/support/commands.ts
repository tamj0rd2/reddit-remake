const getByAttribute = (attr: string, value?: string) => cy.get(value ? `[${attr}=${value}]` : `[${attr}]`)
const getByTestId = (testId: string) => getByAttribute('data-testid', testId)

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  interface Chainable {
    getByAttribute: typeof getByAttribute
    getByTestId: typeof getByTestId
  }
}

Cypress.Commands.add('getByAttribute', getByAttribute)
Cypress.Commands.add('getByTestId', getByTestId)
