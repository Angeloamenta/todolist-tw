import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../service/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private note: NotesService) {}




}
