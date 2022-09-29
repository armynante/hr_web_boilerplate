
# Humid Research Web App Boilerplate

- All serverside
- Next auth
- Prisma ORM
- Postgres
- Docker image


## Helpful Links

#### Docker References
- https://github.com/johnnymetz/docker-nextjs
- https://www.youtube.com/watch?v=gAkwW2tuIqE
- https://www.youtube.com/watch?v=3c-iBn73dDE

#### Digital Ocean Deployment
- https://docs.digitalocean.com/products/container-registry/quickstart/


## Getting Started


#### Environment Variables (`.env`)

```sh
PROJECT_NAME="<NAME>"
POSTGRES_USER="<NAME>"
POSTGRES_PASSWORD="<PASSWORD>"
DB_PORT=5432 # default port for postgres
DB_PORT_FORWARD="5555"
DB_PORT_STRING="${DB_PORT_FORWARD}:${DB_PORT}"
DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:${DB_PORT_FORWARD}/${PROJECT_NAME}"
SECRET="<SECRET>" # openssl rand -base64 32

```
 > Anytime these variables are changed, you will need to rebuild the docker image 

### Development

```
docker build -t <Name>/<AppName>:<VersionNum> .
docker compose build 
docker compose up -d
```

- Production mode app: http://localhost:3000/
- Development mode app: http://localhost:3001/


### Email Auth Setup
- https://medium.com/p/397e558bdcf0

```sh
EMAIL_SERVER_USER=username
EMAIL_SERVER_PASSWORD=password
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_FROM=noreply@example.com
```

## Google Auth Setup

- OAuth Setup
  - https://blog.logrocket.com/
  - nextauth-js-for-next-js-client-side-authentication/

```sh
GOOGLE_CLIENT_ID=client_id
GOOGLE_CLIENT_SECRET=client_secret
```

### Prisma Setup

- Global State
  - https://www.prisma.io/docs/guides/database/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

- Middleware
  - https://next-auth.js.org/tutorials/securing-pages-and-api-routes#nextjs-middleware
