import gql from "graphql-tag";
import {Note} from "./note";

export const NOTES_DISPLAY = gql`
  query AllNotesQuery {
    notes {
      id
      title
      pubDate
      description
    }
  }
`
export const NOTE_CREATE = gql`
  mutation createNote($title: String!, $description: String!){
    createNote(input: {title: $title,  description: $description}) {
      note{
        id
        title
        description
      }
    }
  }
`
export const NOTE_UPDATE = gql`
  mutation updateNote($id: ID!,$title: String!, $description: String!){
    updateNote(id: $id, input: {title: $title, description: $description}) {
      note{
        id
        title
        description
      }
    }
  }
`
export const NOTE_DELETE = gql`
  mutation deleteNote($id: ID!) {
    deleteNote(id: $id) {
      ok
    }
  }
`
export const USER_LOGIN = gql`
  mutation loginUser($username: String!, $password: String!){
    createNote(input: {username: $username, password: $password}) {
      user{
        username
        password
      }
    }
  }
`
export const USER_REGISTER = gql`
  mutation registerUser($username: String!,$email: String! $password: String!){
    createNote(input: {username: $username, email: $email, password: $password}) {
      user{
        username
        email
        password
      }
    }
  }
`
export interface NotesQueryResponse {
  notes: Note[];
  loading: boolean;
}
