FROM node:lts-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

RUN  npm install minimist &&\
  npm install --only=development

COPY . .

RUN npm run build:api

#! this is the production image
FROM node:lts-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /apps
COPY ./dist/apps/gdrive-s3-sync-api .
ENV PORT=3333
EXPOSE ${PORT}
RUN npm install --production
# dependencies that nestjs needs
CMD ["node", "dist/main"]
