FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install express
RUN npm install

COPY . .

CMD ["node", "app.js"]