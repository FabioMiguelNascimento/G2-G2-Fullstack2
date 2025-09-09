# Comandos úteis na hora de escrever os códigos

#### 01 - Instalando as dependencias ao clonar o projeto
``` bash
# Dentro da pasta backend execute:
npm i
```

#### 02 - Gerando o Prisma
``` bash
npx prisma generate
```

#### 03 - niciando o servidor
``` bash
npm run dev
```

#### Gerando uma chave openssl para a autenticação
No windows tem que instalar o openssl
``` bash
openssl rand -base64 32
# ou
openssl rand -base64 64
```