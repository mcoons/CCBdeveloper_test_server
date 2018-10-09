FROM node:8.6-alpine
 
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
 
COPY package.json ./
RUN npm install

ENV NODE_ENV "production" 
ENV PORT 3030

COPY . .
 
EXPOSE 3030
CMD ["npm", "start"]