FROM node:lts-alpine

WORKDIR /app
COPY ./dist/apps/user .
COPY ./package.json .
RUN npm install --production
RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express
COPY ./node_modules/@prisma/client/generated/user ./node_modules/@prisma/client/generated/user

CMD node ./main.js