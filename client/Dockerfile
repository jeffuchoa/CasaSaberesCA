FROM node:20 AS build
WORKDIR /app
COPY package.json package-lock.json .
RUN npm install --legacy-peer-deps
COPY . .
ARG VITE_APP_API_URL
ENV VITE_APP_API_URL=$VITE_APP_API_URL
RUN npm run build

FROM node:20 AS production
WORKDIR /app
COPY --from=build /app/dist ./dist
RUN npm install -g serve --legacy-peer-deps
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]