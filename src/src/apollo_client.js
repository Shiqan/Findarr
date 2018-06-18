import ApolloClient from 'apollo-boost'

const uri = `http://localhost:5000/graphql`

export default new ApolloClient({
  uri: uri
})
