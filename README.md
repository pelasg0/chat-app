<img src="/only-logo.png" alt="Logo" width="200"/>

## Commands to set the application up / .env files need to be configured 

### 1. Build/Rebuild the Image

```bash
docker-compose build --no-cache
```

### 2. Run the container

```bash
docker-compose up
```

### Remove containers, volumes, images, and orphans

```bash
docker-compose down --volumes --rmi all --remove-orphans
```

### Prune unused Docker data

```bash
docker system prune -a
```

> **Warning:** These commands will delete all stopped containers, unused networks, dangling images, and volumes. Make sure you don’t need them before running these.

### Enter container shell

```bash
docker exec -it <container-name> sh
```

