# install && build && purne
FROM node:lts-alpine as install-target
ENV PATH $PATH:/app/node_modules/.bin
WORKDIR /app
COPY src ./src
COPY test ./test
COPY .eslintrc.js .prettierrc package.json tsconfig.build.json tsconfig.json package-lock.json ./
RUN npm install
RUN npm run build
RUN npm prune --production

# dist
FROM node:lts-alpine as archive-target
ENV NODE_ENV=production
ENV PATH $PATH:/app/node_modules/.bin
WORKDIR /app
COPY --from=install-target /app/node_modules node_modules
COPY --from=install-target /app/dist dist
CMD ["node", "dist/main"]
