# Tópicos em Redes de Comunicação 3

## Atividade Individual 1: aplicando conceitos de Backend
O objetivo desta atividade é construir uma API simples que persista em banco de dados informações sobre as disciplinas em que o usuário está matriculado neste semestre.

## Ferramentas utilizadas
- [NodeJS](https://nodejs.org/en/download/)
- [Express](http://expressjs.com/en/starter/installing.html)
- [Mongoose](https://mongoosejs.com/docs/)
- [MongoDB](https://hub.docker.com/_/mongo/)
- [Docker](https://docs.docker.com/get-docker/)  

## Arquitetura do projeto
Neste projeto há uma ***Model*** e um ***Controller*** para a entidade **Disciplina**, cada um em seu respectivo diretório em **src**.

## Rotas
- **GET /disciplinas** : Lista todas as disciplinas cadastradas
- **POST /disciplinas** : Cria disciplinas; As informações recebidas são:
	- "código" - ***number***
	- "nome" - ***string***
	- "professor" - ***string***
	- "departamento" - ***string***
	- "qtdCreditos"- ***number***
- **PUT /disciplinas{id}** : Atualiza os dados de uma disciplina utilizando o ID da disciplina passado como parâmetro na URL da requisição.
- **DELETE /disciplinas{id}** : Deleta uma disciplina utilizando o ID da disciplina passado como parâmetro na URL da requisição.  

## Utilização da API: requisições e respostas através do Insomnia
- **Requisição GET:** Nesta requisição não há necessidade de parâmetro na requisição ou informações pelo ***body***.  
Exemplo de requisição:(./src/assets/images/get_response.png)