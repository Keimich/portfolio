# Usar a imagem oficial do Nginx
FROM nginx:alpine

# Remover a configuração padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiar a nossa configuração personalizada do Nginx
COPY nginx/default.conf /etc/nginx/conf.d/

# Copiar os arquivos da aplicação para o diretório padrão do Nginx
COPY src /usr/share/nginx/html