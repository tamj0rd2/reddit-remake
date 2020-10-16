# your-app-name

Site URL: https://example.com

## About this template

This template uses:

- Node 12 LTS
- Typescript 4
- Parcel frontend with React
- Express backend

### Using this template

1. Replace all occurrences of `your-app-name` with your actual app name
2. Uncomment the "deployment" block in .github/workflows/ci.yml if you would like
   to deploy to heroku after each push to master
3. Delete the "About this template" section of the README :)

## Development

### Prerequisites

- [node LTS (v12)](https://nodejs.org/en/download/)
- [docker](https://docs.docker.com/get-docker/)

### Getting started

1. Open a terminal
2. Install dependencies using the command `npm install`
3. Run the site using `npm run dev`
4. Go to http://localhost:8080

### Running tests

#### Full test suite

The full test suite needs to be run before doing any push to master. That's to
prevent ourselves from breaking the live version of the website. Follow these
steps before each push to master:

1. Open a terminal
2. Run `./build.sh`
3. If you get a "SUCCESS" message, you can push. If you get a failed message or
   any other error, do not push. Fix the problem and then run the tests again
   before pushing.

#### Other tests

During development, you might just want to run a subset of the tests locally.

- Unit and integration tests: `npm run test` or `npm run test:watch`
- Acceptance tests: `npm run test:acceptance`

## Deployment

The app is deployed automatically as part of a CI pipeline. When code is pushed
to master and all CI tests succeed, the code will be deployed to live.
