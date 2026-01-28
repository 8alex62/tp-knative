FROM node:18-slim
WORKDIR /app
COPY index.js .
USER node
EXPOSE 8080
CMD ["node", "index.js"]