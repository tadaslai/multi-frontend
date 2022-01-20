import {Component, OnInit} from '@angular/core';
import {Apollo} from 'apollo-angular'
import { Note } from "../note";
import {NotesQueryResponse, NOTES_DESCRIPTION} from "../graphql";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})

export class NotesComponent implements OnInit {
  notes: Note[] = [];
  loading: boolean = true;

  constructor(private apollo: Apollo,) {}
  /*delete(note: Note): void {
    this.notes = this.notes.filter(h => h !== note);
    this.noteService.deleteHero(hero.id).subscribe();
  }*/
  ngOnInit(): void {
    this.apollo.watchQuery<NotesQueryResponse>({
      query: NOTES_DESCRIPTION })
      .valueChanges.subscribe((result) => {
      this.notes = result.data.notes;
      this.loading = result.data.loading;
    })
  }
}
