FROM php:8.4-apache

# Instalar extensões necessárias
RUN docker-php-ext-install pdo pdo_mysql

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Definir diretório de trabalho
WORKDIR /var/www/html

# Copiar arquivos do backend para o container
COPY . .

# Instalar dependências do PHP
RUN composer install

# Habilitar o mod_rewrite do Apache
RUN a2enmod rewrite

# Expôr a porta do backend
EXPOSE 8000

CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]