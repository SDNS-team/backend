FROM node:lts-alpine

WORKDIR /app
COPY ./dist/apps/gateway .
COPY ./package.json .
RUN npm install --production
RUN npm install reflect-metadata tslib rxjs @nestjs/platform-express
COPY ./node_modules/@prisma/client/generated/user ./node_modules/@prisma/client/generated/user
COPY ./node_modules/@prisma/client/generated/friend ./node_modules/@prisma/client/generated/friend

CMD node ./main.js