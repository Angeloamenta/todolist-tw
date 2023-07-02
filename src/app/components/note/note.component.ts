import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NotesService } from '../../service/notes.service';


@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  constructor(private notes: NotesService) {}
  notebase:any;

  name:string = ""
  text:string = ""


  ngOnInit() {
    this.notebase = this.notes.notes
   // let obj = {name:"nome", note:"nota", checked:true};
   
 }

 checkNote(index:any) {
  // console.log(index);
  this.notes.notes[index].checked = !this.notes.notes[index].checked
  // console.log(this.notes.notes[index].checked);
  
  
 }
  

    delete(index:any) {
      console.log(index);
     this.notes.notes.splice(index, 1)
      // for (let index = 0; index < this.notes.notes.length; index++) {
      //   const element = this.notes.notes[index];
      //   this.notes.notes.splice(index, 1)      
        
      // } 
    }

    editNote (index:any) {
      console.log(index);
      let editNotes = this.notes.notes[index]
      return editNotes.edit = !editNotes.edit
    }

    editSingleNote(index:any) {
      console.log(this.notes.notes[index]);
      let element = this.notes.notes[index];

      element.name = this.name
      element.text = this.text

      this.notes.notes[index].edit = false
      console.log(this.notes.notes[index]);

    } 

}
