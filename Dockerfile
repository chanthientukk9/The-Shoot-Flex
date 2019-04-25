FROM node:10.14

ADD ./ ./

RUN yarn install && yarn run build

EXPOSE 3000

CMD ["yarn", "run", "start"]
