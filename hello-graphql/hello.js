var { graphql, buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'the magic is here' };

graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});