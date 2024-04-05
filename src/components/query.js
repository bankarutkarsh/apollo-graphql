import { gql } from "@apollo/client";

// all list
export const GET_ALL_PRODUCT_DETAILS = gql`
  query {
    countries(
      filter: {
        code: {
          in: [
            "US"
            "IN"
            "PK"
            "BD"
            "EG"
            "AU"
            "AS"
            "BR"
            "AR"
            "SA"
            "SK"
            "SO"
            "CA"
            "MX"
          ]
        }
      }
    ) {
      name
      native
      capital
      phone
      awsRegion
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`;
