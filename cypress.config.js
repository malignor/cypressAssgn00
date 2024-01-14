const { defineConfig } = require('cypress')

module.exports = defineConfig({
	projectId: 'h8wftu',
	e2e: {
    specPattern: "cypress/e2e/cypress-web-assessment/*.cy.*s",
	},
})
