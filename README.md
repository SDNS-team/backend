# Backend

* npx prisma generate --schema=./apps/user/prisma/schema.prisma - сгенерировать типы
* npx prisma generate --schema=./apps/friend/prisma/schema.prisma
* npx prisma generate --schema=./apps/note/prisma/schema.prisma
* npx prisma migrate dev --schema=./apps/user/prisma/schema.prisma - накатить миграцию
* npx prisma migrate dev --schema=./apps/friend/prisma/schema.prisma
* npx prisma migrate dev --schema=./apps/friend/prisma/schema.prisma
* docker-compose -f docker-compose.development.ymp up -d

## Для себя

docker build --platform linux/amd64 --progress=plain -t birthdayapp_development_gateway -f apps/user/Dockerfile .
nx run-many --target=build --projects=friend,user,gateway --parallel