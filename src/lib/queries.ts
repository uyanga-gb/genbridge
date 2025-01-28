import { gql } from "@apollo/client";

export const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
      nodes {
        databaseId
        title
        programsFields {
          location
          isFeatured
          status
        }
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        date
        content(format: RENDERED)
      }
    }
  }
`;

export const GET_PROGRAM = gql`
  query GetProgram($id: ID!) {
    program(id: $id, idType: DATABASE_ID) {
      databaseId
      title
      programsFields {
        location
        isFeatured
        status
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      date
      content(format: RENDERED)
    }
  }
`;