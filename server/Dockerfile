FROM node
WORKDIR /usr/app

COPY package.json .
RUN yarn install --silent
COPY . .