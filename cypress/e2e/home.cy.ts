describe('Home Page', () => {

  beforeEach(() => {
    cy.log('BK')
    cy.visit('http://localhost:3000')
  })


  context('Hero Section', () => {

    it('The h1 contains the correct text', () => {
      //    cy.get('h1').should('exist').contains('Testing Next.js Applications with Cypress')
      cy.get('[data-test="hero-heading"]').should('exist').contains('Testing Next.js Applications with Cypress')
    })
  
    it('The features on the homepage are correct', () => {
      cy.get("dt").eq(0).contains('4 Courses')
      cy.get("dt").eq(1).contains('25+ Lessons')
      cy.get("dt").eq(2).contains('Free and Open Source')
    })  

  })

  context('Courses Section', () => {

    it('Course: Testing Your First Next.js Application', () => {
      cy.getByData('course-0').find('a').eq(3).click()
      cy.location('pathname').should('eq', '/testing-your-first-application')
      cy.wait(3000)
    })

    it('Course: Testing Foundations', () => {
      cy.getByData('course-1').find('a').contains('Get started').click()
      cy.location('pathname').should('eq', '/testing-foundations')
      cy.wait(3000)
    })
    
    it('Course: Cypress Fundamentals', () => {
      cy.getByData('course-2').find('a').contains('Get started').click()
      cy.location('pathname').should('eq', '/cypress-fundamentals')
      cy.wait(3000)
    })
  })
  

})