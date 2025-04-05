# Dockerization- Publishing the microservice into the cloud -SIT737-5.2D
This is a simple web application that is designed to run inside a Docker container. It listens on port 3000 inside the container and can be accessed via port 8080 on the host machine. The application can serve a webpage or provide API responses based on the configuration.
# Prerequisites
We have to make sure that we have installed:
- Node.js
- npm
- Express.js
- Docker
# Installation and Setup
- Push code to GitHub
- git add .
- git commit -m "my filename"
- git push origin master
# Steps to form the image
- Tag the docker image: docker tag anenaghosh/myapp gcr.io/upbeat-button-455906-m1/anenaghosh/myapp:latest
- Push the docker image: docker push gcr.io/upbeat-button-455906-m1/anenaghosh/myapp:latest
- Pull the docker image: docker pull gcr.io/upbeat-button-455906-m1/anenaghosh/myapp:latest
- Run the Docker Image: docker run -d -p 8080:3000 gcr.io/upbeat-button-455906-m1/anenaghosh/myapp:latest
# Run the application
- http://localhost:8080