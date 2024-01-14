import { defineConfig } from 'cypress'
export default defineConfig({
	projectId: 'h8wftu',
	e2e: {
    specPattern: "cypress/e2e/cypress-web-assessment/*.cy.ts",
	},
})
