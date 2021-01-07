FROM node:latest as builder

RUN mkdir /app
WORKDIR /app

COPY . /app/
RUN npm install
RUN npm run build --prod

FROM nginx:latest

# add init script
COPY ./docker/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist/ .

EXPOSE 80