FROM node:lts-alpine
WORKDIR /apps
COPY ./dist/apps/gdrive-s3-sync-api .
ENV PORT=3333
EXPOSE ${PORT}
RUN npm install --production
# dependencies that nestjs needs
CMD node ./main.js