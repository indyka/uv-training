FROM node:10

WORKDIR /src

COPY . /src

RUN npm install

EXPOSE 3001

CMD npm run start
