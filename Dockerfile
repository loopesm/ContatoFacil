<<<<<<< HEAD
FROM node:20-alpine
=======
FROM node:lts-alpine
>>>>>>> 6c7c173 (Criação da Imagem no DockerHub)
WORKDIR /app
COPY package*.json ./
RUN npm install
RUN addgroup dev && adduser -S -G dev moises
USER moises
COPY ./.env ./.env
COPY . .
CMD ["node", "server.js"]
EXPOSE 4545
