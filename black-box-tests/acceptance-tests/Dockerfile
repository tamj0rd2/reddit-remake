FROM cypress/included:5.3.0

# necessary for the wait-for script to work
RUN apt-get -q update && apt-get -qy install netcat

WORKDIR /app

# by setting CI environment variable we switch the Cypress install messages
# to small "started / finished" and avoid 1000s of lines of progress messages
# https://github.com/cypress-io/cypress/issues/1243
ENV CI=1

# dependencies will be installed only if the package files change
COPY package.json package-lock.json ./

RUN npm install --only=prod
# this is a not very nice workaround just to expose the typescript types in ci.
# it has to be done because we're not install cypress via npm in ci (to get around
# having to do massive downloads every time there's a version bump)
RUN npm install @types/cypress

# verify that Cypress has been installed correctly.
# running this command separately from "cypress run" will also cache its result
# to avoid verifying again when running the tests
RUN cypress verify

COPY . .
