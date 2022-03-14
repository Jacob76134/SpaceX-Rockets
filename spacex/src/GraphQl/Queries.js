import {gql} from '@apollo/client'

export const GET_ROCKETS = gql`
query Query {
    rockets {
      rockets {
        name
        description
        img
        first_flight
        success_rate_pct
        stages
        boosters
        wikipedia
        height
      }
    }
  }

`