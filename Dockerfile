FROM node:12.22.12-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "app.js" ]