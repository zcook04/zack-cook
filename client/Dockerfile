FROM node:alpine as build-stage
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /app/out /usr/share/nginx/html
COPY --from=build-stage /app/nginx/default.conf /etc/nginx/conf.d/default.conf