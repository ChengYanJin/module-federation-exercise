ARG NGINX_IMAGE_VERSION=1.23.0-alpine

FROM nginx:${NGINX_IMAGE_VERSION}

COPY /build /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]