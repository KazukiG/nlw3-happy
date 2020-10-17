import express from 'express'; /*-Inicialmente não vai rodar, pois o node não entende TypeScript, precisamos instalar yarn add typescript -D
                                 -Apos intalar, vamos gerar um arquivo de configuração, para não ficar no modo padrão e acabar traduzindo coisas desnecessarias yarn tsc --init
                                 -Mude o es5 para o es2017
                                 -Vamos adicionar finalmente um pacote para o projeto rodar o TypeScript e o Node yarn add ts-node-dev -D ps:Esse comando está tbm no package.json*/


import path from 'path';
import cors from 'cors';
import 'express-async-errors';
import './database/connection';
import routes from './routes';      
import errorHandler from './errors/handler';    

const app = express();

app.use(express.json());

// Rota = conjunto
// Recursos = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = Buscar uma informação (Lista, item)
// POST = Criando uma informação
// PUT = Efitando uma informação
// DELETE = Deletando uma informação

// Query Params: http://localhost:3333/users?search=kazuki
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users (Identificar um recurso)


// yarn add typeorm sqlite3
//Driver nativo: sqlite3.query('SELECT * from user')
//Query builder: knex('users').select('*').where...
//ORM(Obeject Relational Mapping): Itens da tabela  possuem 
//relação direta aqui com o programa

//yarn typeorm migration:create -n create_orphanages
//Assim criamos nossa primeira migration para uma tabela de orfanatos

app.use(cors());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);

