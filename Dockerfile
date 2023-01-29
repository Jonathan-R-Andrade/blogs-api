FROM node:16

WORKDIR /app

RUN apt-get update
RUN apt-get install lsof

COPY package.json package-lock.json ./

RUN npm install

COPY .sequelizerc ./
COPY ./src ./src

CMD [ "npm","start" ]
