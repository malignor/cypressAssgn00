import { defineConfig } from 'cypress'

export default defineConfig({
	projectId: 'h8wftu'
	e2e: {
		baseUrl: 'http://localhost:3000',
	},
	specPattern: "**/*.cy.ts",
})
