#!/bin/bash
echo "docker build -t 2048-game ."

echo "docker run -d -p 8080:8080 --name 2048-game-instance-1 2048-game"

echo "docker run -d -p 8081:8080 --name 2048-game-instance-1 2048-game"
//lab 2
echo "docker-compose up -d"
