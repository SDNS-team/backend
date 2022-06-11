FROM node:lts-alpine

WORKDIR /app
COPY ./dist/apps/gateway .
COPY ./apps/gateway/prisma ./prisma/
COPY ./package*.json .
RUN npm install --production
RUN npx prisma generate --schema=./prisma/schema.prisma

CMD node ./main.js