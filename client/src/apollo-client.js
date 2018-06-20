import ApolloClient from 'apollo-boost'

const uri = `http://localhost:${process.env.PORT}/graphql`

export default new ApolloClient({
  uri: uri
})
