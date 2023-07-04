import { Component, OnInit } from '@angular/core';
import { NotesService } from './service/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist-tw';

  notebase:any

  constructor(private Notes:NotesService) {}

  ngOnInit() {
    this.notebase = this.Notes.notes
  }
}
