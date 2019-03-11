FROM node:latest
#FROM nodered/node-red-docker:latest
LABEL author=<apu.n.alamo@gmail.com>

#RUN apk --update add bash

# instalo el dashboard en el userDir
RUN mkdir -p /data
WORKDIR /data
RUN npm install node-red-dashboard

# instalo nodered en el directorio /
WORKDIR /
COPY package.json .
RUN npm install
ADD ./src src

CMD npm start