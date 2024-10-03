1. docker build -t game .
2. docker run -d -p 8080:8080 --name game-app1 game
3. docker run -d -p 8081:8080 --name game-app2 game
4. Поднять контейнеры: docker-compose up -d

sudo docker stop game-app1-1 && sudo docker stop game-app2-1 && sudo docker rm game-app2-1 && sudo docker rm game-app1-1 

