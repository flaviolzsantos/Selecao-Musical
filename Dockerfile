# Usar a imagem oficial do Node.js como base
FROM node:20

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de configuração e dependências
COPY package*.json ./

# Copiar o restante do código da aplicação
COPY . .

RUN rm -rf node_modules/

# Instalar dependências
RUN npm install


# Expor a porta na qual a aplicação vai rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
