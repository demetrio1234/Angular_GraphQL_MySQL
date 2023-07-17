# Stage 1 - Build the Angular app
FROM node:14 as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2 - Serve the Angular app using Nginx
FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Copy the default nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

