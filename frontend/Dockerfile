FROM node:23-alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm" "run" "dev"]

# ENTRYPOINT ["npm", "run", "dev", "--", "--port=5713", "--host=0.0.0.0"]

