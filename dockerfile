FROM node:16

# Create app directory
WORKDIR /code

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN pnpm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# COPY . .
# RUN npm run swagger
# RUN npm run build
#EXPOSE 8080
#CMD [ "node", "/dist/server.js" ]