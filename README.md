# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### Assumptions & Scenarios:

1) The assessment was completed using React and TypeScript.
2) The Search and List components were developed independently for modularity.
3) The Search component auto-focuses when the page loads.
4) The Suggestions API returns static data. After typing at least two characters, 
   the API is called to display suggestions.
5) Clicking the search button triggers the Query Results API, rendering a list of results 
   with highlighted text based on provided offset values.

### Search component below functions will support
Suggestion Selection: Supports selecting search suggestions.
Keyboard Navigation: Allows navigating through suggestions using arrow keys (up/down) and enter.
Mouse Interaction: Supports mouse hover and selection of suggestions.
Input Reset: Includes functionality to clear or reset the search input.
Auto-Focus: The input is auto-focused on page load.

### Pagination Component
The pagination component has been integrated to display results, showcasing a maximum of five page numbers at any given time. The displayed page numbers dynamically update based on the user's selection. Additionally, "Previous" and "Next" buttons have been implemented at both the beginning and the end of the pagination list. 

currently, there is no api call while clicking on page but provided call backfunction it will give page number

##### Suggestions: we could enhance user experience by implementing infinite scrolling, progressive loading with smooth Transitions 

### HighlightText component
The HighlightText component highlights text within the search results based on specified offset values.

### Responsive web design 
The design covers breakpoints for screen widths of 1024px, 768px, and 420px.
The layout adjusts automatically, with a 20px margin on both the left and right sides.

### unit test cases
React Testing Library was used to write unit tests.
To run tests, use: npm run test.

### e2e test cases
cypress was used for end-to-end testing, covering all scenarios. In this application we used cypress 13

For Cypress 13, the required Node.js node 14 version +

To open Cypress: npm run cypress:open.  (by running this command cypress will launch in interactive GUI mode)
To run all tests: npm run cypress:run.  (This command will execute all tests in project and provide a report in the terminal)

#### testCoverage folder
In testCoverage folder, find all e2e test case results.
