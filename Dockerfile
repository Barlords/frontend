FROM node:18.9.0-alpine as build
WORKDIR /build
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build


FROM nginx:1.23.1-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /build/dist ./
COPY bootstrap.sh .
RUN chmod u+x ./bootstrap.sh
EXPOSE 80
CMD ["./bootstrap.sh"]
