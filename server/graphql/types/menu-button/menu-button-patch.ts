import gql from 'graphql-tag'

export const MenuButtonPatch = gql`
  input MenuButtonPatch {
    menu: String
    rank: Int
    style: String
    icon: String
    text: String
    auth: String
    logic: String
  }
`
