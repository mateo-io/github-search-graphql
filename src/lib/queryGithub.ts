import { ApolloClient, InMemoryCache, gql } from "@apollo/client"
import { UserType } from "../types/common"

const GITHUB_ENDPOINT = "https://api.github.com/graphql"

const client = new ApolloClient({
  uri: GITHUB_ENDPOINT,
  headers: { authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
  cache: new InMemoryCache(),
})

type UserQueryResult = Array<UserType>

type QueryParams = {
  query: string
  firstElements: number
}

const queryGithubRequest = async (params: QueryParams): Promise<any> => {
  const { query, firstElements } = params
  const response = await client.query({
    query: gql`
        query getUser {
          search(type: USER, query: "${query}", first: ${firstElements}) {
            userCount
            nodes {
              ... on User {
                name
                location
                bio
                avatarUrl
                login
              }
            }
          }
        }
      `,
  })

  console.log(`queryGithub response OK`)
  return response
}

export const queryGithub = async (
  params: QueryParams
): Promise<UserQueryResult> => {
  let data

  try {
    data = await queryGithubRequest(params)
    return data["data"]["search"]["nodes"]
  } catch (error) {
    console.error(`queryGithub failed to fetch - ${error}`)
    return []
  }
}
