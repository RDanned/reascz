# Lead form simple app

## Deployed project url:
http://46.101.214.164/chci-nabidku

## How to run
### 1. Docker, on local machine
1. Clone the repository
2. Install docker and docker-compose
3. Copy frontend/.env.production.example as frontend/.env.production and fill VITE_API_URL. URL must be WITHOUT /api/ at the end.
4. Copy backend/.env.production.example as backend/.env.production and fill MONGO_URI and BACKEND_PORT(all variables are already filled).
5. Run `sudo docker compose -f docker-compose.yml up --build`

### 2. Docker, on server, for production
1. Clone the repository
2. Install docker and docker-compose
3. Copy frontend/.env.production.example as frontend/.env.production and fill VITE_API_URL. URL must be WITH /api/ at the end.
4. Copy backend/.env.production.example as backend/.env.production and fill MONGO_URI and BACKEND_PORT(all variables are already filled).
5. Run `sudo docker compose -f docker-compose.prod.yml up --build`

### 3. Without docker, on local machine
1. Clone the repository
2. Install node.js
3. Copy frontend/.env.production.example as frontend/.env.production and fill VITE_API_URL. URL must be VITE_API_URL /api/ at the end(all variables are already filled).
4. Copy backend/.env.production.example as backend/.env.production and fill MONGO_URI and BACKEND_PORT(all variables are already filled).
5. go to frontend folder and run `npm install` and `npm run dev`
6. go to backend folder and run `npm install` and `npm run dev`