#!/bin/bash

#!/bin/bash

# Define the Docker image name
IMAGE_NAME="todo-frontend"

# Build the Docker image from the current directory
docker build -t $IMAGE_NAME .

# Check if a container with the same name is already running
if [ "$(docker ps -q -f name=frontend)" ]; then
    # Stop the running container
    docker stop frontend
fi

# Remove the existing container (if any)
docker rm -f frontend

# Run a new container using the newly built image
docker run -d --name frontend -p 3000:3000 $IMAGE_NAME
