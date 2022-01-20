import gql from "graphql-tag";
import {Note} from "./note";

export const NOTES_DESCRIPTION = gql`
  query AllNotesQuery {
    notes {
      title
      pubDate
      description
    }
  }
`
export const NOTE_CREATE = gql`
  mutation CreateNote {
    notes {
      title
      pubDate
      description
    }
  }
`
export interface NotesQueryResponse {
  notes: Note[];
  loading: boolean;
}
