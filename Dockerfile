FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN addgroup dev && adduser -S -G dev moises
USER moises
COPY ./.env ./.env
COPY . .
CMD ["node", "server.js"]
EXPOSE 4545
