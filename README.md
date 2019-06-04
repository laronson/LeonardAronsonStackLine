This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Personal Notes
This is the completed code base of Leonard Aronson's Stackline code assesment.

The following files were added to complete the assignment:

### Actions
- actions.js: The file containing all actions creators including an action that makes a mock call to an api using axios.

### Components
- main-page.js: The main page of the product display which holds both the product side bar and sales graph.
- product-bar.js: The product side bar which contains all meta information about what product is being viewed.
- sales-graph.js: The container for the line graph which shows retail sales and wholesale sales.  This files uses Recharts in order to display data in a graphical format.

### Reducers
- root-reducer.js: The main reducer which contains the modal for the global state tree.

### Utility Files
- month-enum.js: A file containing a simple object in order to easily transform numerical month values into month string values.
- product-display.css: The custom css for all components in the project.
- store.js: The code used to initialize the global store.
- Webdev_data2.json: The provided data used to mock the api call.

## How To Run
1) Clone repository from https://github.com/laronson/LeonardAronsonStackLine
2) Run the command npm start from home directory of project
3) In your browser, navigate to http://localhost:3000/


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
