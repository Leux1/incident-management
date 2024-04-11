FROM node:20
# create app directory
WORKDIR /usr/src/app

#Install app dependencies
COPY package.json ./
RUN npm install

#Bundle app source folder
COPY app ./
# Port which your app is listening on
EXPOSE 3000 

CMD [ "npm", "start" ]