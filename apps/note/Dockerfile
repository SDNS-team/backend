FROM node:lts-alpine

WORKDIR /app
COPY ./dist/apps/note .
COPY ./package.json .
RUN npm install --production
RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express
COPY ./node_modules/@prisma/client/generated/note ./node_modules/@prisma/client/generated/note

CMD node ./main.js