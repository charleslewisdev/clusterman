# base image
FROM node:12.2.0-alpine

# set working directory
RUN mkdir -p /app/server
WORKDIR /app/server

# add node_modules binaries to $PATH
ENV PATH /app/server/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . .

RUN npm config set unsafe-perm true

RUN npm install
COPY . /app/server

CMD ["npm", "start", "dev"]
