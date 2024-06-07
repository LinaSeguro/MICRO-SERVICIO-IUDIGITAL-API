FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Set environment variable for Docker
ENV NODE_ENV=docker

# Expose port and run the application
EXPOSE 4200

CMD ["node", "app.js"]
