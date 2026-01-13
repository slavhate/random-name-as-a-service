FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY data ./data
COPY src ./src

EXPOSE 3000

CMD ["npm", "start"]
