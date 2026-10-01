# Sistema de Gestão Cultural
### *Casa de Saberes Cego Aderaldo*

![API REST](https://img.shields.io/badge/API-REST-blue)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![SeaweedFS](https://img.shields.io/badge/SeaweedFS-C71A36)

Projeto acadêmico full stack, inspirado nas necessidades de um centro
cultural real (Casa de Saberes Cego Aderaldo). Sistema web para gestão de
agenda de eventos e publicação de trabalhos e pesquisas, com área
administrativa autenticada.

🔗 **Demo:** https://casa-saberes.jeffuchoa.com.br
📸 *(adicionar 2-3 prints ou um GIF das telas principais aqui)*

## Funcionalidades

- **Autenticação de administrador**: login restrito para quem pode criar
  conteúdo no sistema
- **Agenda de eventos**: criação e listagem de eventos do centro cultural
  (criação restrita a administradores)
- **Trabalhos publicados**: upload de PDF com thumbnail, exibidos em uma
  página dedicada de trabalhos (restrito a administradores)
- **Pesquisas**: vinculação de formulários do Google Forms às páginas de
  pesquisa do site (restrito a administradores)
- Armazenamento de arquivos via **SeaweedFS** (sistema de storage distribuído)

## Stack

| Camada         | Tecnologia          |
|----------------|----------------------|
| Frontend       | React                |
| Backend        | Node.js / Express    |
| Banco de dados | MongoDB              |
| Armazenamento de arquivos | SeaweedFS |
| Infraestrutura | Docker + Coolify (self-hosted, VPS própria) |

## Arquitetura

O frontend em React (`client/`) consome uma API REST construída em Express
(`server/`), que persiste os dados estruturados (eventos, metadados dos
trabalhos) no MongoDB. Rotas de criação de conteúdo (eventos, trabalhos,
pesquisas) são protegidas por autenticação, restritas a usuários
administradores. Os arquivos PDF e as thumbnails enviados no upload são
armazenados separadamente no SeaweedFS, referenciados por URL no documento do
MongoDB. Toda a aplicação roda containerizada via Docker e é hospedada em um
servidor próprio, gerenciado com Coolify.

## Como rodar localmente

Com Docker (recomendado — sobe client, server, MongoDB e SeaweedFS juntos):

```bash
git clone https://github.com/jeffuchoa/P01_CasaSaberesCA.git
cd P01_CasaSaberesCA
docker compose up
```

Rodando cada parte separadamente (para debug):

```bash
# Backend
cd server
npm install
npm start

# Frontend (em outro terminal)
cd client
npm install
npm start
```
