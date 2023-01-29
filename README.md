# Blogs API

Projeto desenvolvido por [Jonathan R. Andrade](https://www.linkedin.com/in/jonathan-r-andrade/) na [Trybe](https://www.betrybe.com/).

## Sobre

Aplicação em Node.js de uma API RESTful feita com Express.js. Essa API é responsável por gerenciar posts de um blog. Os usuários podem se cadastrar e fazer login para criar, editar, deletar e listar os posts.

## Habilidades desenvolvidas

* Criar APIs RESTful com Express.js;
* Utilizar arquitetura MSC (Model, Service e Controller) para organização do projeto;
* Manipular o banco de dados MySQL com operações CRUD usando o ORM Sequelize;
* Criar tabelas e fazer a relação entre elas usando migrations do Sequelize CLI;
* Utilizar o JWT (JSON Web Token) para autenticação e autorização de usuários;
* Utilizar Swagger para documentar a API.

## Ferramentas/Tecnologias utilizadas

* JavaScript
* Express.js
* Sequelize
* JWT (JSON Web Token)
* Bcrypt.js
* Node.js v16
* MySQL
* Docker
* Docker Compose
* Swagger

## Como executar

> É necessário ter instalado em sua máquina o [Docker](https://www.docker.com/) e o [Docker Compose](https://docs.docker.com/compose/). O Docker Compose deve estar na versão 1.29 ou superior.

Siga os passos abaixo executando os comandos no terminal.

1. Clone o repositório.

    * Exemplo com Git + HTTPS
      ```
      git clone https://github.com/Jonathan-R-Andrade/blogs-api.git
      ```
    * Exemplo com Git + SSH
      ```
      git clone git@github.com:Jonathan-R-Andrade/blogs-api.git
      ```
    * Usando GitHub CLI
      ```
      gh repo clone Jonathan-R-Andrade/blogs-api
      ```

    > Entre na pasta do repositório clonado.

2. Inicie a aplicação com o Docker Compose.
    ```
    docker-compose up -d --build
    ```
    > A documentação da API estará disponível no navegador no endereço [http://localhost:3000/docs/pt/](http://localhost:3000/docs/pt/).
