import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular'
import {Note} from "../note";
import {NotesQueryResponse, NOTES_DISPLAY} from "../graphql";
import {NotesService} from "../services/notes.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
  notes: Note[] = [];
  loading: boolean = true;
  id: number = 0;

  constructor(private apollo: Apollo, private notesService: NotesService) {
  }

  getID(id: number) {
    this.id = id
  }

  displayNotes() {
    return this.apollo.watchQuery<NotesQueryResponse>({
      query: NOTES_DISPLAY,
      errorPolicy: 'all'
    })
      .valueChanges.subscribe((result) => {
        this.notes = result.data.notes;
        this.loading = result.data.loading;
      })
  }

  createNote(title: string, description: string) {
    this.notesService.createNote(title, description);
  }

  updateNote(id: number, title: string, description: string) {
    this.notesService.updateNote(id, title, description);
  }

  deleteNote(id: number) {
    this.notesService.deleteNote(id);
  }

  ngOnInit(): void {
    this.displayNotes();
  }
}
