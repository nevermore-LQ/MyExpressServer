FROM node:latest

RUN mkdir -p /app/express

WORKDIR /app/express

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "start"]