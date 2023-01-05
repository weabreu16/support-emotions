# Install dependencies only when needed, example if dependencies change
FROM node:18-alpine3.15
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --network-timeout 1000000
COPY . .

CMD [ "yarn", "dev" ]