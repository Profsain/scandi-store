import { gql } from '@apollo/client'

export const LOAD_DATA = gql`
  query {
    categories {
      name
      products {
        id
        name
        description
        inStock
        gallery
        prices {
        	currency {
            label
            symbol
          }
          amount
        }
      }
    }
  }
`

export const LOAD_PRODUCT = gql`
  query($id: String!) {
    product(id: $id) {
      name
      description
      inStock
      gallery
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      attributes {
        name
        items {
          displayValue
          value
        }
      }
    }
  }
`