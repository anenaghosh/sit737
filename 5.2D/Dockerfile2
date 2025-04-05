# Use Node.js as base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies first (to optimize caching)
COPY package.json ./
RUN npm install

# Copy all files into the container
COPY . .

# Expose port 8080 
EXPOSE 8080

# Start the app
CMD ["node", "index.js"]