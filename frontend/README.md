# Country Management App

This is a React application that allows users to view information about countries, including their borders, flags, and population data. It fetches data from various APIs to display information dynamically.

## Features

- **Country List**: Display a list of countries.
- **Country Info Page**: Display detailed information for each selected country, including:
    - Country Name and Flag
    - Border Countries (with clickable links to navigate to other country pages)
    - Population chart showing population trends over time.

## Tech Stack

- **Frontend**: React, TypeScript, Ant Design, React Query
- **Backend (optional)**: Node.js/Express (if applicable)
- **API**: Uses external APIs to fetch country data, including borders and population data.

## Getting Started

To run this project locally, follow these steps:


### 1. Install Dependencies

Run the following command to install all necessary dependencies:

```bash
npm install
```

### 2. Run the Application

To start the application in development mode, use:

```bash
npm start
```

This will run the app at [http://localhost:3000](http://localhost:3000). The app will automatically reload if you make changes to the source code.

### 3. Build the Application

To create a production build of your app, use:

```bash
npm run build
```

This will generate a `build` folder that is optimized for deployment.

### 4. Running Tests

If you wish to run tests, use:

```bash
npm test
```

This will launch the test runner in interactive mode. For more information on testing, check the [Create React App documentation on testing](https://facebook.github.io/create-react-app/docs/running-tests).

### 5. Eject Configuration (Optional)

If you need full control over the build configuration (webpack, Babel, ESLint, etc.), you can eject the project:

```bash
npm run eject
```

**Note**: This is a one-way operation, and you won’t be able to undo it. Only use this if you’re comfortable with custom configurations.

## API Endpoints

- **Country List**: Fetches a list of available countries.
- **Country Info**: Fetches detailed information about each country, including borders and population.
- **Population Data**: Fetches historical population data for countries.

## Additional Information

- For further documentation on React, visit the [React documentation](https://reactjs.org/).
- For more details about Create React App, visit the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).