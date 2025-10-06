# Quick MongoDB Setup Guide

## Option 1: Download and Install MongoDB Community Edition (Recommended)

### For Windows:
1. Go to: https://www.mongodb.com/try/download/community
2. Download MongoDB Community Edition for Windows
3. Run the installer (choose "Complete" installation)
4. Start MongoDB service:
   - Press Win+R, type "services.msc"
   - Find "MongoDB" service and start it

### For Mac:
```bash
# Install using Homebrew
brew install mongodb-community
brew services start mongodb-community
```

### For Linux (Ubuntu):
```bash
# Install MongoDB
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

## Option 2: Use MongoDB Atlas (Cloud - FREE)

1. Go to: https://www.mongodb.com/atlas/database
2. Click "Try Free"
3. Create an account
4. Create a free cluster
5. Add a database user
6. Get your connection string
7. Replace the MONGODB_URI in server/.env

## Option 3: Use Docker (If you have Docker installed)

```bash
docker run --name mongodb -d -p 27017:27017 mongo:latest
```

## After setting up MongoDB:

Update your `.env` file with:
```
MONGODB_URI=mongodb://localhost:27017/mern_auth_portal
```

Then restart the server.