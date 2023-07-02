import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../service/notes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  notebase:any;

  constructor(private notes: NotesService) {}

  ngOnInit() {
     this.notebase = this.notes.notes
    // let obj = {name:"nome", note:"nota", checked:true};
    console.log(this.seePrivate.length);
    
    
  }
  seePrivate() {
    return this.notes.notes
  }
  // checkId(index:any) {
  //   console.log(index)
  // }
  
  // //
  // //selectAll() {
  // //   for (let index = 0; index < this.notes.notes.length; index++) {
  // //     const element = this.notes.notes[index];
  // //     console.log(element);
  // //     element.checked = true
      
      
  // //   }
  // // }

  //   delete(index:any) {
  //     console.log(index);
  //     for (let index = 0; index < this.notes.notes.length; index++) {
  //       const element = this.notes.notes[index];
  //       this.notes.notes.splice(index, 1)      
        
  //     } 
  //   }

  //   editNote (index:any) {
  //     console.log(index);

  //     let editNotes = this.notes.notes[index]
  //     return editNotes.edit = !editNotes.edit
  //   }

  //   editSingleNote(pippo:any) {

  //     console.log(this.notes.notes[pippo]);
  //     let element = this.notes.notes[pippo];

  //     element.name = "pino"
  //     element.note = "lorem ipsum"

  //     console.log(this.notes.notes[pippo]);


      
  //   } 
}

