/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.cypress.io/')
  })

  //======== NOTES FOR THE ONE JUDGING ==========
  // 
  //  Screenshots are taken at key points, and overwritten with each run.
  //  If you want to see the crucial moments live, go to Commands.ts and change the wait value in "slowDownForReview" to 2000 or more (for 2 sec delay)
  // 
  // Start each script by defining the aliases for a few elements to make the script more readable. 
  //    Selectors are engineered by how they are described, in a more natural language.
  //    This way if the page code changes but still meets the Human criteria, the script will need less maintenance.
  // Then perform the actions.
  
  // Uses some custom commands
  //	scrollIntoMiddle : moves the element more into the middle than scrollIntoView. This is useful because the frontmost frame obscured the element in view.
  //	slowDownForReview : pauses for the test assessment. If you want to see this go quickly, just change the wait value in commands.ts to 0


  //=====================
  it('Users are able to visit the website and able to scroll down to “Loved by OSS, trusted by Enterprise” and see the weekly downloads number.', () => {
	//define the header for "Loved by OSS ..." and also the element to identify the weekly downloads.
	cy.get('h2:contains("Loved by"):contains("trusted by")')
		.as('loveTrustHeader');
	cy.get('div.grow:has(> div:contains("Weekly downloads")) > div:first-child')
		.as('downloadsNumber');
	
	//elements defined, time to do the operations
	cy.get('@loveTrustHeader').scrollIntoMiddle()
		.should('be.visible')
	cy.slowDownForReview()
	cy.screenshot('LoveTrustHeader',{capture: 'viewport', overwrite: true})
	cy.get('@downloadsNumber').scrollIntoMiddle()
		.should('be.visible')
		.invoke('text')
		.then((text) => {
			cy.log('Weekly downloads: ',text);
		});
	cy.slowDownForReview()
	cy.screenshot('WeeklyDownloads',{capture: 'viewport', overwrite: true})
  })

  //=====================
  it('User is able to click on Company and then on “About Cypress”', () => {
	//define the About Cypress element uniquely. the dropdown for Company needs no alias because it's simple.
	cy.get('span.flex.flex-col > span:contains("About Cypress")')
		.as('aboutCypress')
	  
	//elements defined, time to do the operations
	// - the instructions specified to click the dropdown, so have to click it then mouseover to trigger the menu appropriately.
	cy.get('#dropdownCompany').click()
		.should('be.visible')
	cy.slowDownForReview()
	cy.get('#dropdownCompany').trigger('mouseover');
	cy.slowDownForReview()
	cy.get('@aboutCypress').click()
		.should('be.visible')
	cy.slowDownForReview()
	cy.screenshot('AboutCypress',{capture: 'viewport', overwrite: true})
  })

  //=====================
  it('User is able to click on “Install” and then on “npm install cypress” and make sure the copied text is “npm install cypress --save-dev”', () => {
	//define the installButton and the copyInstallToClipboard uniquely. 
	cy.get('button:contains("Install")')
		.as('installButton')
	cy.get('dialog button:contains("npm install")')
		.as('copyInstallToClipboard')
		
	// - had to use the invoke in order to click the Install button even when it was hidden due to the smaller window
	// - used assertion to ensure that the clipboard matches what we want. This also doesn't require clipboardy so it has fewer dependencies
	cy.get('@installButton').invoke('click')
	cy.slowDownForReview()
	cy.get('@copyInstallToClipboard').click().then(()=>{
		cy.window().then((win) => {
			win.navigator.clipboard.readText().then((text) => {
			  expect(text).to.eq('npm install cypress --save-dev')
			})
		})
	})
	cy.slowDownForReview()
	cy.screenshot('InstallClipboardText',{capture: 'viewport', overwrite: true})
  })

  //=====================
  it('User is able to click on “Product” and then “visual review”', () => {
	// - presumed that 'visual review' was supposed to be 'Visual Reviews'
	//define the Visual Reviews element uniquely. the dropdown for Product needs no alias because it's simple.
	cy.get('a > span:contains("Visual Reviews")')
		.as('visualReviews')
	  
	//elements defined, time to do the operations
	// - the instructions specified to click the dropdown, so have to click it then mouseover to trigger the menu appropriately.
	cy.get('#dropdownProduct').click()
		.should('be.visible')
	cy.get('#dropdownProduct').trigger('mouseover');
	cy.slowDownForReview()
	cy.get('@visualReviews').click()
		.should('be.visible')
	cy.slowDownForReview()
	cy.screenshot('VisualReviews',{capture: 'viewport', overwrite: true})
  })

})
