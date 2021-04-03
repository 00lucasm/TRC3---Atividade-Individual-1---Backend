# Tópicos em Redes de Comunicação 3
## Atividade Individual 1: aplicando conceitos de Backend
O objetivo desta atividade é construir uma API um simples que persista em banco de dados informações sobre as disciplinas em que o usuário está matriculado neste semestre.
## Ferramentas utilizadas
- [NodeJS](https://nodejs.org/en/download/)
- [Express](http://expressjs.com/en/starter/installing.html)
- [Mongoose](https://mongoosejs.com/docs/)
- [MongoDB](https://hub.docker.com/_/mongo/)
- [Docker](https://docs.docker.com/get-docker/)  

## Arquitetura do projeto
Neste projeto há uma ***Model*** e um ***Controller*** para a entidade **Disciplina**, cada um em seu respectivo diretório em **src**
## Rotas
- GET /disciplinas
- POST /disciplinas
- PUT /disciplinas{id}
- DELETE /disciplinas{id}