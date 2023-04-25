const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const app = express();

app.use(express.json());
app.use((req, res, next) => {

  next();
});


app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
)
app.listen(process.env.PORT, () =>{
  console.log("first")
})