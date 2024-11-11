FROM node:22-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 9080

CMD ["npm", "run", "serve"]