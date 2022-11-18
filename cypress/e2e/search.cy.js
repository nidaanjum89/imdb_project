
import selectors from '../support/selectors.js';

describe('IMDB Search ', () => {
  it('search and get results', () => {
    //Please add time out if your website takes >60 secs
    cy.visit('/')
    cy.get(selectors.searchInput).type("shazam")
    cy.get(selectors.searchIcon).click()
    //imdb site is flaky here it opens sometimes a different UI
    cy.contains(RegExp("Shazam!"))
    //additional check to make sure the movie year
    .get(selectors.resultsSection).contains("2019")
  })

  it('verify placeholder is visisble', () => {
    cy.get(selectors.searchInput).should('have.attr','placeholder', 'Search IMDb')
  })

 it('searches by pressing ENTER', () => {
  //Pressing the Enter key from the keyboard
    cy.get(selectors.searchInput)
      .type('shazam{enter}')
      cy.contains(RegExp("Shazam!"))
  })

  it('searches for invalid results', () => {
    cy.get(selectors.searchInput)
      .type('////////')
      cy.get(selectors.searchIcon).click()
      cy.contains(RegExp("No results found"))
  })

  it('empty search result', () => {
    cy.get(selectors.searchInput)
      .type('{enter}')
      cy.contains(RegExp("Search IMDb by typing a word"))
  })

  it('verify selection from autofill results', () => {
    cy.get(selectors.searchInput)
      .type('shazam')
      cy.get(selectors.autoSuggestions).should('be.visible').click()
      cy.get(selectors.movie).should('have.text', "Shazam! Fury of the Gods")
  })
})