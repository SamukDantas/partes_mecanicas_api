# Use uma imagem base adequada, por exemplo, Node.js (se a aplicação for em Node.js)
FROM node:18

# Cria o diretório de trabalho e copia os arquivos da aplicação
WORKDIR /partes_mecanicas_api
COPY . .

# Instala dependências
RUN npm install

# Expõe a porta da aplicação
EXPOSE 3000

# Define variáveis de ambiente (Render permite definir variáveis no ambiente de produção)
ENV POSTGRES_HOST=$POSTGRES_HOST \
    POSTGRES_PORT=$POSTGRES_PORT \
    POSTGRES_USER=$POSTGRES_USER \
    POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
    POSTGRES_DB=$POSTGRES_DB

# Comando para iniciar a aplicação
CMD ["npm", "start"]
