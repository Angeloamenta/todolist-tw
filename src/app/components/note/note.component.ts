import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../service/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  constructor(private notes: NotesService) {}
  notebase:any;


  ngOnInit() {
    this.notebase = this.notes.notes
   // let obj = {name:"nome", note:"nota", checked:true};
   
 }

 checkNote(index:any) {
  // console.log(index);
  this.notes.notes[index].checked = !this.notes.notes[index].checked
  // console.log(this.notes.notes[index].checked);
  
  
 }

  checkId(index:any) {
    console.log(index)
  }
  
  //
  //selectAll() {
  //   for (let index = 0; index < this.notes.notes.length; index++) {
  //     const element = this.notes.notes[index];
  //     console.log(element);
  //     element.checked = true
      
      
  //   }
  // }

    delete(index:any) {
      console.log(index);
      for (let index = 0; index < this.notes.notes.length; index++) {
        const element = this.notes.notes[index];
        this.notes.notes.splice(index, 1)      
        
      } 
    }

    editNote (index:any) {
      console.log(index);

      let editNotes = this.notes.notes[index]
      return editNotes.edit = !editNotes.edit
    }

    editSingleNote(pippo:any) {

      console.log(this.notes.notes[pippo]);
      let element = this.notes.notes[pippo];

      element.name = "pino"
      element.text = "lorem ipsum"

      console.log(this.notes.notes[pippo]);

    } 

}
