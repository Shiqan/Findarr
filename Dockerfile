FROM node:carbon
LABEL maintainer="Shiqan"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --only=production

COPY . .

EXPOSE 8080

CMD [ "npm", "prod" ]
