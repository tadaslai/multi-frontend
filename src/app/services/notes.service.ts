import {Injectable} from '@angular/core';
import {NOTE_CREATE, NOTE_DELETE, NOTES_DISPLAY, NOTE_UPDATE} from "../graphql";
import {Apollo} from "apollo-angular";
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private apollo: Apollo) {
  }

  createNote(title: string,  description: string) {
    this.apollo.mutate({
      mutation: NOTE_CREATE,
      refetchQueries: [{query: NOTES_DISPLAY}],
      errorPolicy: 'all',
      variables: {
        title: title,
        description: description,
      }
    }).subscribe()
  }

  updateNote(id: number, title: string, description: string) {
    this.apollo.mutate({
      mutation: NOTE_UPDATE,
      refetchQueries: [{query: NOTES_DISPLAY}],
      errorPolicy: 'all',
      variables: {
        id: id,
        title: title,
        description: description,
      }
    }).subscribe()
  }


  deleteNote(id: number) {
    this.apollo.mutate({
      mutation: NOTE_DELETE,
      refetchQueries: [{query: NOTES_DISPLAY}],
      errorPolicy: 'all',
      variables: {
        id: id,
      }
    }).subscribe()
  }
}
