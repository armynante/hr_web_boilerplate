
## Humid Research Web App Boilerplate

- next auth
- prisma 
- postgres


### Docker References
- https://github.com/johnnymetz/docker-nextjs
- https://www.youtube.com/watch?v=gAkwW2tuIqE
nopm run

### Digital Ocean Deployment
- https://docs.digitalocean.com/products/container-registry/quickstart/

### Getting Started

***Note:*** *This project is built using Docker and Docker Compose. If you do not have Docker installed, please follow the instructions [here](https://docs.docker.com/get-docker/).*
  
#### Environment Variables (`.env`)

```sh
PROJECT_NAME="<NAME>"
POSTGRES_USER="<NAME>"
POSTGRES_PASSWORD="<PASSWORD>"
DB_PORT=5432 # default port for postgres
DB_PORT_FORWARD="5555"
DB_PORT_STRING="${DB_PORT_FORWARD}:${DB_PORT}"
DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${DB_PORT_FORWARD}/${PROJECT_NAME}"
```
 > Anytime these variables are changed, you will need to rebuild the docker image 

### Development

```
docker compose build
docker compose up -d
```

- Production mode app: http://localhost:3000/
- Development mode app: http://localhost:3001/

