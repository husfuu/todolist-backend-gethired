FROM node:19-alpine
WORKDIR /app
COPY . /app
RUN yarn install
CMD [ "yarn", "start" ]
EXPOSE 3030