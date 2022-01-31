import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular'
import {Note} from "../note";
import {NotesQueryResponse, NOTES_DISPLAY, NOTE_CREATE, NOTE_DELETE, NOTE_UPDATE} from "../graphql";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
  notes: Note[] = [];
  loading: boolean = true;
  id: number = 0;
  constructor(private apollo: Apollo) {
  }

  getID(id:number){
    this.id = id
  }
  createNote(title: string, pubDate: string, description: string) {
    this.apollo.mutate({
      mutation: NOTE_CREATE,
      refetchQueries: [{query: NOTES_DISPLAY}],
      errorPolicy: 'all',
      variables: {
        title: title,
        pub_date: new Date(pubDate),
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

  displayNotes() {
    this.apollo.watchQuery<NotesQueryResponse>({
      query: NOTES_DISPLAY,
      errorPolicy: 'all'
    })
      .valueChanges.subscribe((result) => {
      this.notes = result.data.notes;
      this.loading = result.data.loading;
    })
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

  ngOnInit(): void {
    this.displayNotes();
  }
}
