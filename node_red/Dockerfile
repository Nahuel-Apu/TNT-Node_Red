FROM node
LABEL author=<apu.n.alamo@gmail.com>
ADD ./src src
WORKDIR ./src
RUN apk --update add bash
RUN npm install
CMD npm start