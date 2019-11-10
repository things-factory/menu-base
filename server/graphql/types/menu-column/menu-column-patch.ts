import gql from 'graphql-tag'

export const MenuColumnPatch = gql`
  input MenuColumnPatch {
    menu: String
    name: String
    description: String
    rank: Int
    term: String
    colType: String
    colSize: Int
    nullable: Boolean
    refType: String
    refName: String
    refUrl: String
    refParams: String
    refRelated: String
    searchRank: Int
    sortRank: Int
    reverseSort: Boolean
    virtualField: Boolean
    extField: Boolean
    searchName: String
    searchEditor: String
    searchOper: String
    searchInitVal: String
    gridRank: Int
    gridEditor: String
    gridFormat: String
    gridValidator: String
    gridWidth: Int
    gridAlign: String
    uniqRank: Int
    formEditor: String
    formValidator: String
    formFormat: String
    defVal: String
    rangeVal: String
    ignoreOnSave: Boolean
  }
`
