import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query MobileById($id: Int!) {
    mobileById(id: $id) {
      id
      name
      price
      url1
      url2
      colors
      features {
            ram
            memory
            processor
            os
            screensize
            display
            battery
            weight
            warranty
        }
    }
  }
`;

export const useFetchById = (id: number) => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      id
    },
  });

  return { loading, error, data };
};


