FROM node:12.19.0-alpine as base

RUN apk add util-linux

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV HUSKY_SKIP_INSTALL=true

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
FROM base as tests

FROM base as app
RUN npm run build
CMD ["npm", "start"]
