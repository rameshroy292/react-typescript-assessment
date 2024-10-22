# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Assumptions & Scenarios:

1) The assessment was completed using React and TypeScript.
2) The Search and List components were developed independently for modularity.
3) The Search component auto-focuses when the page loads.
4) The Suggestions API returns static data. After typing at least two characters, 
   the API is called to display suggestions.
5) Clicking the search button triggers the Query Results API, rendering a list of results 
   with highlighted text based on provided offset values.

# Search component below functions will support
Suggestion Selection: Supports selecting search suggestions.
Keyboard Navigation: Allows navigating through suggestions using arrow keys (up/down) and enter.
Mouse Interaction: Supports mouse hover and selection of suggestions.
Input Reset: Includes functionality to clear or reset the search input.
Auto-Focus: The input is auto-focused on page load.

# HighlightText component
The HighlightText component highlights text within the search results based on specified offset values.

# Responsive web design 
The design covers breakpoints for screen widths of 1024px, 768px, and 420px.
The layout adjusts automatically, with a 20px margin on both the left and right sides.

# unit test cases
React Testing Library was used to write unit tests.
To run tests, use: npm run test.

# e2e test cases
ypress was used for end-to-end testing, covering all scenarios.
To open Cypress: npm run cypress:open.
To run all tests: npm run cypress:run.

