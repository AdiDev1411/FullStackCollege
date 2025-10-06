@echo off
echo Starting MERN Auth Portal...

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo Error: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if MongoDB is running
echo Checking MongoDB connection...
timeout /t 2 >nul

REM Install dependencies if not already installed
if not exist "node_modules" (
    echo Installing root dependencies...
    call npm install
)

if not exist "server\node_modules" (
    echo Installing server dependencies...
    cd server
    call npm install
    cd ..
)

if not exist "client\node_modules" (
    echo Installing client dependencies...
    cd client
    call npm install
    cd ..
)

REM Check if .env file exists in server
if not exist "server\.env" (
    echo Creating server .env file...
    copy "server\.env.example" "server\.env"
    echo Please edit server\.env file with your MongoDB URI and JWT secret
)

echo.
echo ================================================
echo  MERN Auth Portal Setup Complete!
echo ================================================
echo.
echo To start the development servers:
echo   npm run dev
echo.
echo Backend will run on: http://localhost:5000
echo Frontend will run on: http://localhost:3000
echo.
echo Make sure MongoDB is running before starting the servers.
echo.
pause