# Node.js Kubernetes Application -SIT737 -6.2C
This project is a straightforward web application built using Node.js that is intended to operate within a Kubernetes cluster. It shows how to use Docker for containerization, Kubernetes for deployment, and Continuous Integration/Continuous Deployment (CI/CD) for application updates. 
# Prerequisites
We have to make sure that we have installed:
- Node.js
- npm
- Express.js
- Docker
- kubernetes
- GitHub
# Project Structure
- Dockerfile
- deployment.yaml
- service.yaml
- index.js
- readme.md
 # Steps to form the image
 - Build the docker image: docker build -t anenaghosh/sit737-app:v1
 - Push the docker image: docker push anenaghosh/sit737-app:v1
 - Run the docker container: docker run -p 8080:80 anenaghosh/sit737-app:v1
 # Access the app in your browser:
 URL: http://localhost:80/ 
 # Deploying on Kubernetes
- Deploy the application: kubectl apply -f deployment.yaml
                          kubectl apply -f service.yaml
- Verify the application is running: kubectl get pods
                                     kubectl get services
- Port forward for local access:kubectl port-forward service/sit737-app-service 8080:80
# Updating the Application
- Modify index.js (e.g., update response text or add new routes).
- Build a new Docker image with an updated version tag: docker build -t anenaghosh/sit737-app:v3
- Push the new image to your registry:docker push anenaghosh/sit737-app:v3
- Update deployment.yaml with the new image tag:containers:
                                                name: nodejs
                                                image: username/node-app:v3
- Apply the updated deployment:kubectl apply -f deployment.yaml
- Verify the updated pods: kubectl get pods