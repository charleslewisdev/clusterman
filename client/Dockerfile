# base image
FROM node:12.2.0-alpine

# set working directory
RUN mkdir -p /app/client
WORKDIR /app/client

# add node_modules binaries to $PATH
ENV PATH /app/client/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . .

RUN npm config set unsafe-perm true

RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

CMD ["npm", "start"]