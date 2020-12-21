# Stage 1: Build, Node
FROM case-study-basket-dependencies:v1 as ui-build

WORKDIR /usr/src/app
COPY . .

ARG BUILD_COMMAND
RUN echo $BUILD_COMMAND
RUN ["sh", "-c", "$BUILD_COMMAND"]

# Stage 2: Run, Nginx
FROM nginx:1.12-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY ./docker/etc/nginx/conf.d/frontend.conf /etc/nginx/conf.d/frontend.conf
RUN nginx -t

ARG APP_FOLDER
RUN echo $APP_FOLDER
COPY --from=ui-build /usr/src/app/dist/${APP_FOLDER} /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
