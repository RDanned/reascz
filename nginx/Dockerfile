# 1) Build stage for React
FROM node:20-alpine AS build-frontend

WORKDIR /app
# Copy the frontend package files
COPY ./frontend/package.json ./frontend/package-lock.json ./
RUN npm install

# Copy the rest of the frontend source code
COPY ./frontend/ .
RUN npm run build

# 2) Production stage: Nginx
FROM nginx:alpine

# Copy your Nginx config
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy compiled React build from the build stage
COPY --from=build-frontend /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
