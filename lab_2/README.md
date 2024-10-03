1. docker build -t 2048-game .
2. docker run -d -p 8080:8080 --name 2048-game-app1-1 2048-game
3. docker run -d -p 8081:8080 --name 2048-game-app1-2 2048-game
4. Поднять контейнеры: docker-compose up -d

sudo docker stop 2048-game-app1-1 && sudo docker stop 2048-game-app2-1 && sudo docker rm 2048-game-app1-1 && sudo docker rm 2048-game-app2-1 

