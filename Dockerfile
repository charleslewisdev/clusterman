FROM node:17.4-alpine AS stage1

WORKDIR /app
COPY ./client/package*.json /app/
RUN npm ci --only=production
COPY ./client /app
RUN npm run build

FROM node:17.4-alpine AS stage2
COPY --from=stage1 /app/build /app/client/build/
WORKDIR /app/server
COPY ./server .
RUN npm install
CMD ["npm", "start"]