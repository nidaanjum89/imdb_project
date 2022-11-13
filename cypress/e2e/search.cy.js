
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
})