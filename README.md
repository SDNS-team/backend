# Backend

* npx prisma generate --schema=./apps/user/prisma/schema.prisma - сгенерировать graphql
* npx prisma migrate dev - накатить миграцию
* почитать про транзации между сервисами

# Запуск

1) В каждой папке /apps должен быть файл .env
2) docker-compose -f docker-compose.development.ymp up -d


docker build --platform linux/amd64 --progress=plain -t b_user -f apps/user/Dockerfile .

npm i 
npx prisma generate
nx build

docker-compose -f docker-compose.development.yml up -d

