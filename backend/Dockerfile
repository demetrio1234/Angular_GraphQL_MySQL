# Base Node image
FROM node:14
# Set working directory in the container
WORKDIR /usr/src/app
# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the code
COPY . ./
# Expose the port the app runs on
EXPOSE 4000
# The command to run the app
CMD [ "node", "index.js" ] 
