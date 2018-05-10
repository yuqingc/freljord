FROM node:9-slim AS build

WORKDIR /app

COPY . /app

RUN yarn && yarn run build; exit 0

EXPOSE 3000

CMD [ "yarn", "run", "prod" ]
