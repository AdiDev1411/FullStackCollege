#!/bin/bash

echo "Starting MERN Auth Portal..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed"
    echo "Please install npm"
    exit 1
fi

echo "Node.js version: $(node --version)"
echo "npm version: $(npm --version)"

# Install dependencies if not already installed
if [ ! -d "node_modules" ]; then
    echo "Installing root dependencies..."
    npm install
fi

if [ ! -d "server/node_modules" ]; then
    echo "Installing server dependencies..."
    cd server
    npm install
    cd ..
fi

if [ ! -d "client/node_modules" ]; then
    echo "Installing client dependencies..."
    cd client
    npm install
    cd ..
fi

# Check if .env file exists in server
if [ ! -f "server/.env" ]; then
    echo "Creating server .env file..."
    cp "server/.env.example" "server/.env"
    echo "Please edit server/.env file with your MongoDB URI and JWT secret"
fi

echo ""
echo "================================================"
echo "  MERN Auth Portal Setup Complete!"
echo "================================================"
echo ""
echo "To start the development servers:"
echo "  npm run dev"
echo ""
echo "Backend will run on: http://localhost:5000"
echo "Frontend will run on: http://localhost:3000"
echo ""
echo "Make sure MongoDB is running before starting the servers."
echo ""