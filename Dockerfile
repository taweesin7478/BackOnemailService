FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

# RUN yarn install
RUN yarn install --production && yarn cache clean

RUN apk add --no-cache tzdata
ENV TZ=Asia/Bangkok


COPY . .

EXPOSE 9213

RUN yarn build
#for production
# CMD ["yarn", "restart"]
#for develop
# CMD ["yarn", "dev"]
CMD ["yarn", "start"]