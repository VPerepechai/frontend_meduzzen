# base image
FROM node:20.7-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV PORT $PORT

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install @vue/cli@5.0.8 -g

EXPOSE $PORT

# start app
CMD ["npm", "run", "serve"]
