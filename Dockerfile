FROM node:16-alpine

RUN apk update

ENV PORT=3333

EXPOSE 3333

WORKDIR /app

COPY "package.json" .

RUN yarn 

COPY . .

CMD ["yarn", "dev"]