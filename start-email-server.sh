#!/bin/bash

echo "Starting Email API Server..."
cd server

if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

echo ""
echo "Starting server on http://localhost:3001"
echo "Press Ctrl+C to stop the server"
echo ""
npm start

