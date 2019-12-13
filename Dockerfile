FROM node:12.13.0-alpine as build

WORKDIR /calendar
COPY package*.json ./
RUN npm install
COPY webpack.config.js ./
COPY public /calendar/public
COPY src /calendar/src
RUN npm run build

FROM nginx:1.17.5-alpine
COPY --from=build /calendar/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
