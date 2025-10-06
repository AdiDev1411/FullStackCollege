# Deployment Guide

## Prerequisites

### Development Environment
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Production Environment
- Server with Node.js support
- MongoDB Atlas or MongoDB server
- Domain name (optional)
- SSL certificate (recommended)

## Environment Setup

### Development
1. Clone the repository
2. Run setup script:
   ```bash
   # Windows
   setup.bat
   
   # Linux/Mac
   chmod +x setup.sh
   ./setup.sh
   ```
3. Edit `server/.env` with your settings
4. Start development servers:
   ```bash
   npm run dev
   ```

### Production

#### Server Configuration
1. **Install dependencies:**
   ```bash
   npm run install-all
   ```

2. **Build the client:**
   ```bash
   npm run build
   ```

3. **Set up environment variables:**
   Create `server/.env.production`:
   ```env
   NODE_ENV=production
   PORT=5000
   MONGODB_URI=your_production_mongodb_uri
   JWT_SECRET=your_very_long_and_random_jwt_secret
   JWT_EXPIRE=7d
   BCRYPT_ROUNDS=12
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

#### Recommended Production Setup

1. **Use PM2 for process management:**
   ```bash
   npm install -g pm2
   cd server
   pm2 start index.js --name "mern-auth-api"
   pm2 save
   pm2 startup
   ```

2. **Use Nginx as reverse proxy:**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location /api {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_set_header X-Real-IP $remote_addr;
           proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
           proxy_set_header X-Forwarded-Proto $scheme;
           proxy_cache_bypass $http_upgrade;
       }
       
       location / {
           root /path/to/your/client/build;
           index index.html index.htm;
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. **Set up SSL with Let's Encrypt:**
   ```bash
   sudo certbot --nginx -d your-domain.com
   ```

## Docker Deployment

### Dockerfile for Server
```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

### Dockerfile for Client
```dockerfile
FROM node:16-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Docker Compose
```yaml
version: '3.8'

services:
  mongodb:
    image: mongo:5.0
    restart: always
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password
    volumes:
      - mongodb_data:/data/db
    ports:
      - "27017:27017"

  server:
    build: ./server
    restart: always
    environment:
      NODE_ENV: production
      MONGODB_URI: mongodb://admin:password@mongodb:27017/mern_auth_portal?authSource=admin
      JWT_SECRET: your_jwt_secret_here
    ports:
      - "5000:5000"
    depends_on:
      - mongodb

  client:
    build: ./client
    restart: always
    ports:
      - "80:80"
    depends_on:
      - server

volumes:
  mongodb_data:
```

## Security Checklist

- [ ] Change default JWT secret
- [ ] Use HTTPS in production
- [ ] Set up proper CORS origins
- [ ] Configure rate limiting
- [ ] Keep dependencies updated
- [ ] Use environment variables for secrets
- [ ] Set up monitoring and logging
- [ ] Configure backup for database
- [ ] Set up firewall rules
- [ ] Use strong passwords for database

## Monitoring

### Health Checks
- Backend: `GET /api/health`
- Database: Check MongoDB connection
- Frontend: Check if React app loads

### Logs
- Server logs: Check PM2 logs with `pm2 logs`
- Nginx logs: `/var/log/nginx/access.log` and `/var/log/nginx/error.log`
- MongoDB logs: Check MongoDB log files

## Backup Strategy

1. **Database Backup:**
   ```bash
   mongodump --uri="your_mongodb_uri" --out=/backup/$(date +%Y%m%d)
   ```

2. **Application Backup:**
   ```bash
   tar -czf app-backup-$(date +%Y%m%d).tar.gz /path/to/your/app
   ```

3. **Automated Backups:**
   Set up cron jobs for regular backups