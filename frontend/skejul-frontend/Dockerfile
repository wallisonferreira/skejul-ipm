FROM node:18

# Definir diretório de trabalho
WORKDIR /app

# Copiar os arquivos do frontend para o container
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Construir a aplicação
RUN npm run build

# Expôr a porta do frontend
EXPOSE 3000

CMD ["npm", "start"]
