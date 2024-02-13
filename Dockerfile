FROM node:20.5.0 as dev

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install
RUN npm install @rollup/rollup-linux-x64-gnu

FROM node:18-alpine as prod
WORKDIR /app

COPY --from=dev /app /app
CMD ["npm", "start"]
