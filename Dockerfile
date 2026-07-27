# ---- Etapa 1: build do site (Vite + React) ----
FROM node:20-alpine AS builder

WORKDIR /app

# GEMINI_API_KEY é opcional: só é usado se algum componente futuramente
# chamar a API do Gemini. Pode ser definido como Build Arg no EasyPanel.
ARG GEMINI_API_KEY=""
ENV GEMINI_API_KEY=${GEMINI_API_KEY}

# Copia manifestos primeiro para aproveitar cache do Docker
COPY package*.json ./
RUN npm install

# Copia o restante do código-fonte
COPY . .

RUN npm run build

# ---- Etapa 2: serve os arquivos estáticos com Nginx ----
FROM nginx:alpine AS runner

# Config simples para SPA (fallback para index.html)
RUN printf 'server {\n\
    listen 80;\n\
    server_name _;\n\
    root /usr/share/nginx/html;\n\
    index index.html;\n\
    location / {\n\
        try_files $uri $uri/ /index.html;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
