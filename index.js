var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');


/*Schema graphql*/
var schema = buildSchema(`
  type Query {
    company: String
    employees: [Employed]
  }

  type Employed{
    id: String! ,
    name: String,
    email: String,
    department: String
  }
`);


const root = {
  company: () => 'Codeling',
  employees: () => [
    {id: '1',name: 'Jose', email: 'jose@graphql.com', department: 'Development'},
    {id: '2',name: 'Carolina',email: 'carolina@graphql.com',department: 'Design'},
    {id: '3',name: 'Vanesa',email: 'vanesa@graphql.com', department: 'Development'},
    {id: '4',name: 'Oscar',email: 'oscar@graphql.com',department: 'CEO'}
  ]
};


const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));



app.listen(4000, () => console.log(`Server http://localhost:4000/graphql`));
