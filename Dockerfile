FROM php:8.4-fpm-alpine

ARG user=evo
ARG uid=1000

# Instalador de extensões PHP e Composer
COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/local/bin/
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Pacotes essenciais do sistema + Node.js e NPM
RUN apk add --no-cache \
    git \
    curl \
    unzip \
    zip \
    bash \
    nodejs \
    npm

# Extensões do PHP
RUN install-php-extensions \
    pdo_pgsql \
    pgsql \
    bcmath \
    pcntl \
    sockets \
    zip

# Configuração customizada do PHP
COPY docker/php/custom.ini /usr/local/etc/php/conf.d/custom.ini

# Criar usuário não-root
RUN adduser -D -u ${uid} -G www-data ${user}

WORKDIR /var/www

USER ${user}
