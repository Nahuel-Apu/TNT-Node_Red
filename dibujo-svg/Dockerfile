FROM node:latest
LABEL author=<apu.n.alamo@gmail.com>

#RUN apk --update add bash
COPY package.json .
RUN npm install
ADD ./src src
ENV PREFIX "/public"
CMD npm start