FROM node:20
RUN apt-get update && apt-get install -y ghostscript --no-install-recommends && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY package.json package-lock.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["node", "./bin/www"]