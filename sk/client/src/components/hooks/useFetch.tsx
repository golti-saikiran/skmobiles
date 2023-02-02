import { gql, useQuery } from "@apollo/client";

const GET_ALL_USERS = gql`
  query getallmobiles {
    mobiles {
      id
      name
      price
      url1
      url2
     features {
     ram
     memory
     }
    }
  }
`;

export const useFetch = () => {
 
  const { loading, error, data } = useQuery(GET_ALL_USERS);
  return { error, loading, data };
}


