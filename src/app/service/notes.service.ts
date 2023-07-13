import { Injectable, OnInit } from '@angular/core';
import { Note } from '../model/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }



  notes:Note[] = []

ngOnInit() {
  console.log(this.notes); 
}

}
