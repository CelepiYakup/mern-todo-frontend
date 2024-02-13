# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

// Function to calculate the standard deviation of a given dataSet array.
function calculateStandardDeviation(dataSet) {
    // Calculate the mean (average) value of the dataSet array using the calculateMean function.
    const mean = calculateMean(dataSet);
    // Get the number of elements in the dataSet array.
    const n = dataSet.length;
    // Initialize a variable to hold the sum of squared differences from the mean.
    let sumOfSquaredDifferences = 0;

    // Iterate through each element in the dataSet array to calculate the sum of squared differences.
    for (let i = 0; i < n; i++) {
        // Calculate the squared difference between the current element and the mean value.
        // Add the squared difference to the sumOfSquaredDifferences variable.
        sumOfSquaredDifferences += Math.pow(dataSet[i] - mean, 2);
    }

    // Calculate the variance by dividing the sum of squared differences by the number of elements.
    const variance = sumOfSquaredDifferences / n;
    // Calculate the standard deviation by taking the square root of the variance.
    const stdDeviation = Math.sqrt(variance);
    // Return the calculated standard deviation.
    return stdDeviation;
}

// Function to calculate the mean (average) value of a given dataSet array.
function calculateMean(dataSet) {
    // Get the number of elements in the dataSet array.
    const n = dataSet.length;
    // Initialize a variable to hold the sum of all elements in the dataSet array.
    let sum = 0;

    // Iterate through each element in the dataSet array to calculate the sum.
    for (let i = 0; i < n; i++) {
        // Add the current element to the sum variable.
        sum += dataSet[i];
    }

    // Calculate the mean by dividing the sum by the number of elements.
    const mean = sum / n;
    // Return the calculated mean value.
    return mean;
}

// Given dataSet array.
const dataSet = [4, 7, 11, 13, 16, 18, 20];
// Calculate the standard deviation of the dataSet array using the calculateStandardDeviation function.
const result = calculateStandardDeviation(dataSet);
// Output the calculate
