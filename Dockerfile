# Usando a imagem do Node.js
FROM node:18

# Define o diretório de trabalho
WORKDIR /partes_mecanicas_api

# Copia os arquivos do projeto
COPY package*.json ./
RUN npm install

COPY . .

# Compila o projeto NestJS
RUN npm run build

# Expõe a porta
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "start:prod"]
