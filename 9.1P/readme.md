# MongoDB Kubernetes Deployment - SIT737- 9.1P
This project demonstrates deploying MongoDB in a Kubernetes cluster with a Node.js application.
# Prerequisites
- Kubernetes Cluster (e.g., Minikube)
- kubectl
- Docker
- npm
- node.js
- npm
- GitHub
# Apply Kubernetes manifests
- kubectl apply -f kubernetes/mongodb-pvc.yaml
- kubectl apply -f kubernetes/mongodb-secret.yaml
- kubectl apply -f kubernetes/mongodb-deployment.yaml
- kubectl apply -f kubernetes/app-service.yaml
- kubectl apply -f kubernetes/app-deployment.yaml
# Test deployment
- node index.js
- URL at POSTMAN: http://127.0.0.1:3000/create
# Check MongoDB access
- kubectl port-forward svc/mongodb 27017:27017
- mongosh --host localhost:27017
# Backup Example
- kubectl exec -it mongodb-867ddd5d7c-sh4zw -- mongodump --out /backup --username admin --password password --authenticationDatabase admin
- kubectl cp mongodb-867ddd5d7c-sh4zw:/backup ./mongo-backup
# Monitoring
- kubectl get pods
- kubectl logs mongodb-867ddd5d7c-sh4zw
