# Use the official Node.js image as the base image
FROM node:22

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install
RUN npm install bcrypt

# Copy the source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:dev"]