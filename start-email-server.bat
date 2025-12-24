@echo off
echo Starting Email API Server...
cd server
if not exist node_modules (
    echo Installing dependencies...
    npm install
)
echo.
echo Starting server on http://localhost:3001
echo Press Ctrl+C to stop the server
echo.
npm start

