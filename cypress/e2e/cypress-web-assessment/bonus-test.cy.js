/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.cypress.io/')
  })

  // Start each script by defining the aliases for a few elements to make the script more readable. 
  //    Selectors are engineered by how they are described, in a more natural language.
  //    This way if the page code changes but still meets the Human criteria, the script will need less maintenance.
  // Then perform the actions.
  
  // Uses some custom commands
  //	scrollIntoMiddle : moves the element more into the middle than scrollIntoView. This is useful because the frontmost frame obscured the element in view.
  //	slowDownForReview : pauses for the test assessment. If you want to see this go quickly, just change the wait value in commands.ts to 0

  it('User is able to click on “Product”, then “Smart Orchestration”, then scroll down to “Test Analytics” and see that the green circle is around “Test Analytics”', () => {
	//define the Smart Orchestration element uniquely. the dropdown for Product needs no alias because it's simple.
	cy.get('a > span:contains("Smart Orchestration")')
		.as('smartOrchestration')
		
	//elements defined, time to do the operations
	// - the instructions specified to click the dropdown, so have to click it then mouseover to trigger the menu appropriately.
	cy.get('#dropdownProduct').click()
		.should('be.visible')
	cy.get('#dropdownProduct').trigger('mouseover');
	cy.get('@smartOrchestration').click()
		.should('be.visible')

	//now we're on a new page.
	//it's time to define the test analytics header and the analytics link in the top bar.
	cy.get('#test_analytics p:contains("Test Analytics")')
		.as('testAnalyticsHeader')
	cy.get('a[href="#test_analytics"]')
		.as('analyticsButton')
	
	//now perform the operations on the new elements
	// - added an offset to the scrollIntoView to ensure that the border up top is triggered.
	// - found the border color by looking at the list of Styles, and checking each RGB value among them.
	cy.get('@testAnalyticsHeader').scrollIntoView({ offset: { top: 300, left: 0 } })
		.should('be.visible')
	cy.get('@analyticsButton')
		.should('have.css', 'border-color', 'rgb(163, 231, 203)');
	cy.log("done")
	cy.screenshot('AnalyticsSection',{capture: 'viewport', overwrite: true})
  })

})
