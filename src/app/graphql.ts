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
  mutation createNote($title: String!, $pubDate: Date="2022-01-01", $description: String!){
    createNote(input: {title: $title, pubDate: $pubDate, description: $description}) {
      note{
        title
        pubDate
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
export interface NotesQueryResponse {
  notes: Note[];
  loading: boolean;
}
