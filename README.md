# Contato-Fácil

## Descrição

O Contato-Fácil é uma aplicação que permite aos usuários gerenciar suas próprias listas de contatos de forma simples e eficiente. Cada usuário tem acesso restrito à sua própria lista de contatos, garantindo a privacidade dos dados. Embora tenha uma interface simples, o back-end foi projetado com diversas funcionalidades comuns em aplicações modernas.

A aplicação foi construída utilizando a arquitetura MVC, com Node.js e Express.js para lidar com as requisições HTTP, processar dados e renderizar páginas dinâmicas com o EJS. O armazenamento de dados é feito no MongoDB Atlas, um banco de dados NoSQL, garantindo flexibilidade e escalabilidade.

## Funcionalidades

- **Autenticação de Usuário**: Cada usuário tem sua própria conta e lista de contatos.
- **Criação, Edição e Exclusão de Contatos**: Os usuários podem gerenciar suas listas de contatos de forma simples.
- **Segurança**: As senhas são criptografadas com Bcrypt e o sistema está protegido contra ataques CSRF. A aplicação utiliza Certificado SSL para garantir comunicações seguras via HTTPS.
- **Interface Responsiva**: Construída com HTML, CSS e Bootstrap, proporcionando uma experiência de usuário otimizada para diversos dispositivos.
- **Backend Dinâmico**: Páginas dinâmicas renderizadas com EJS e dados do backend integrados de forma eficiente.
- **Deploy em Docker**: A aplicação está containerizada e disponível no DockerHub.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de execução JavaScript no lado do servidor.
- **Express.js**: Framework para criação de APIs e rotas HTTP.
- **EJS**: ViewEngine para renderização de páginas dinâmicas.
- **MongoDB Atlas**: Banco de dados NoSQL para armazenar os dados de usuários e contatos.
- **Bcrypt**: Para criptografia de senhas.
- **CSRF Protection**: Para proteção contra ataques Cross-Site Request Forgery.
- **SSL**: Certificado SSL para requisições HTTPS seguras.
- **HTML, CSS, Bootstrap**: Para a criação de uma interface intuitiva e responsiva.
- **Webpack e Babel**: Utilizados para modularizar o código e garantir compatibilidade com diferentes navegadores.
- **Docker**: A aplicação está containerizada, facilitando o deploy e a escalabilidade.
- **Nginx**: Utilizado para servir as rotas HTTP/HTTPS da aplicação de forma eficiente.

## Links

- **Link da Aplicação**: [loopes.cloud/contato-facil](https://loopes.cloud/contato-facil)
- **Imagem no DockerHub**: [docker pull loopesm/contato-facil:v1.0.0](https://hub.docker.com/r/loopesm/contato-facil)

## Como Rodar a Aplicação Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/contato-facil.git

2. Instalar as Dependências:
   ```bash
   cd conatato-facil
   npm install

3. Configure as Variáveis de Ambiente ( .env )
   
4. Iniciar o Servidor
   ```bash
   npm start

## Como Rodar a Aplicação com Docker
1. Carregar a Imagem da Aplicação Diretamente do DockerHub:
   ```bash
   docker pull loopesm/contato-facil:v1.0.0

2. Criar o Container da Aplicação:
   ```bash
   docker run -d -p 3000:3000 loopesm/contato-facil:v1.0.0

## Implementação
O deploy foi realizado em um VPS da Hostinger, utilizando Docker e Nginx para gerenciamento de rotas HTTP/HTTPS.

Mais detalhes sobre o VPS Hostinger: [Hostinger VPS](https://hostinger.com.br?REFERRALCODE=1MOISES00) .

## Licença

Este projeto está licenciado sob **licença MIT**. Veja o arquivo **LICENSE** para mais detalhes.



















   
