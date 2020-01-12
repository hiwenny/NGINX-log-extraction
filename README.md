# The task
The task is to parse a log file containing HTTP requests and to report on its contents.

For a given log file we want to know:
- The number of unique IP addresses
- The top 3 most visited URLs
- The top 3 most active IP addresses

Please include tests that demonstrate your solution is working.

# Installation 
Run `npm install` to install the dependencies.

# Usage
To run using the test log file: `npm run demo`

To use with other sources: `npm start <your-data.log>`

# Scripts
- `npm start <your-data.log>` for running the script against a log data as source.
- `npm run demo` to run the demo
- `npm test` to run the tests

# FAQs
- This package is written using ES6 syntax - it's recommended that you upgrade to the latest Node, or check compatibility in https://node.green/ if you run into any issues. For additional information see https://nodejs.org/en/docs/es6/.
