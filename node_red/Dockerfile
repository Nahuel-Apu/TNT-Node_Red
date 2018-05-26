FROM node:latest
LABEL author=<apu.n.alamo@gmail.com>

#RUN apk --update add bash

ADD ./src src
WORKDIR ./src

RUN npm install
CMD npm start