FROM node:slim

WORKDIR /

# copy code, install npm dependencies
COPY . /
RUN npm install -g npm@7.24.1
