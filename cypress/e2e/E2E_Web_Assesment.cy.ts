const listData = {
  "TotalNumberOfResults": 1,
  "Page": 1,
  "PageSize": 10,
  "ResultItems": [
    {
      "DocumentId": "8f09d0d0898e5470189120415158f7b5",
      "DocumentTitle": {
        "Text": "Choose a Child Care Centre",
        "Highlights": [{
          "BeginOffset": 9,
          "EndOffset": 14
        }]
      },
      "DocumentExcerpt": {
        "Text": "...Child (aged under 21) of a Singapore Citizen (SC) or Singapore Permanent Resident (PR) Child (aged under 21) of a Singapore Citizen (SC) or Singapore Permanent Resident (PR) From the foreign child (applicant) Birth Certificate and adoption documents (if any) The applicant recent passport...",
        "Highlights": [{
          "BeginOffset": 3,
          "EndOffset": 8
        },
        {
          "BeginOffset": 90,
          "EndOffset": 95
        },
        {
          "BeginOffset": 194,
          "EndOffset": 199
        }
        ]
      },
      "DocumentURI": "https://www.ica.gov.sg/reside/LTVP/apply/child-(aged-under-21)-of-a-singapore-citizen-(sc)-or-singapore-permanent-resident-(pr)"
    }]
};

describe('Search component', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://gist.githubusercontent.com/yuhong90/b5544baebde4bfe9fe2d12e8e5502cbf/raw/44deafab00fc808ed7fa0e59a8bc959d255b9785/queryResult.json', {
      statusCode: 200,
      body: listData,
    }).as('searchResult');
    cy.visit('http://localhost:3000');
  });

  it('focus input field on page load', () => {
    cy.get('input[data-testid="search-input"]').should('be.focused');
  });

  it('it should dipaly initial state with empty results', () => {
    cy.get('ul[data-testid="suggestion-list"] li').should('have.length', 0);
  });

  it('test search component with after entering two charactes in input', () => {
    cy.get('input[data-testid="search-input"]').type('ch');
    cy.get('ul[data-testid="suggestion-list"] li').should('have.length', 6);
  });

  it('navigate suggestions with arrow down first option should active', () => {
    cy.get('input[data-testid="search-input"]').type('ch');
    cy.wait(500);
    cy.get('input[data-testid="search-input"]').type('{downarrow}');
    cy.get('ul[data-testid="suggestion-list"] li').eq(0).should('have.class', 'active')
  });

  it('select suggestion list with enter key', () => {
    cy.get('input[data-testid="search-input"]').type('ch');
    cy.wait(500);
    cy.get('input[data-testid="search-input"]').type('{downarrow}');
    cy.get('input[data-testid="search-input"]').type('{enter}');
    cy.get('input[data-testid="search-input"]').should('have.value', 'child care');
  });

  it('hide suggestions while clearing search', () => {
    cy.get('input[data-testid="search-input"]').type('ch');
    cy.get('input[data-testid="search-input"]').clear();
    cy.get('ul[data-testid="suggestion-list"] li').should('not.exist');
  });

  it('while searching morethan one char need to display close icon', () => {
    cy.get('input[data-testid="search-input"]').type('c');
    cy.get('img[data-testid="close-icon"]').should('exist');
  });

  it('upon clicking close icon clear search value and input should be focused', () => {
    cy.get('input[data-testid="search-input"]').type('c');
    cy.get('img[data-testid="close-icon"]').click();
    cy.get('input[data-testid="search-input"]').clear()
    cy.get('input[data-testid="search-input"]').should('be.focused');
  });

  it('mouse events: hover and select suggestions', () => {
    cy.get('input[data-testid="search-input"]').type('ch');
    cy.get('ul[data-testid="suggestion-list"] li').should('be.visible');
    cy.get('ul[data-testid="suggestion-list"] li').contains('child care').trigger('mouseover');
    cy.get('ul[data-testid="suggestion-list"] li').contains('child care').click();
    cy.get('input[data-testid="search-input"]').should('have.value', 'child care');
  });

  it('show results or pagination after clicking search', () => {
    cy.get('input[data-testid="search-input"]').type('ch');
    cy.wait(500);
    cy.get('input[data-testid="search-input"]').type('{downarrow}');
    cy.get('input[data-testid="search-input"]').type('{enter}');
    cy.get('input[data-testid="search-input"]').should('have.value', 'child care');
    cy.get('div[data-testid="search-button"]').click();
    cy.wait('@searchResult');
    cy.get('h3[data-testid="show-results"]').contains('results');
    listData?.ResultItems.forEach((item, index) => {
      cy.get('div[data-testid="list-item"]').eq(index).within(() => {
        cy.get('a[data-testid="external-link"]').last().should('have.text', item.DocumentURI);
      })
    })
  });
});
