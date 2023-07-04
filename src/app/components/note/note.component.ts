import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../service/notes.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';


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

   editForm:any = FormGroup



  ngOnInit() {
    this.notebase = this.notes.notes

    this.editForm = new FormGroup({
      name: new FormControl(),
      text: new FormControl()
    })
  }

  editFormNote(index:any) {
    
    console.log(this.editForm.value, index);
    let element = this.notes.notes[index];
    if (this.editForm.value.name === null || 
      this.editForm.value.text === null ||
      this.editForm.value.name === "" ||
      this.editForm.value.text === "") {
      console.log("no");
      element.empty = true
      element.exist = false
      this.editForm.reset();
      // this.notes.notes[index].name = this.name
      // this.notes.notes[index].text = this.text
    }else {
      let existingItem = this.notes.notes.find(item => item.text === this.editForm.value.text);
    if (existingItem) {
      // this.notes.notes[index].name = this.name
      // this.notes.notes[index].text = this.text
      element.exist = true
      element.empty= false

  } else if (!existingItem) {
    this.notes.notes[index].edit = false
    this.notes.notes[index].name = this.editForm.value.name
    this.notes.notes[index].text = this.editForm.value.text
    console.log(this.notes.notes[index].name);
    console.log(this.notes.notes[index].name);
    console.log(this.notes.notes[index]);
    element.empty = false
    element.exist = false

  }
}
  this.editForm.reset();
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
      this.name = editNotes.name
      this.text = editNotes.text
      console.log("editnote", this.name, this.text);

      return editNotes.edit = !editNotes.edit
    }

    // noteOk(index:any) {
    //   this.notes.notes[index].edit = false
    // }

    editSingleNote(index:any) {
      console.log(this.notes.notes[index]);
      let element = this.notes.notes[index];
      console.log(element.text);


      if (element.name === "" || element.text === "") {
        console.log("no");
        element.empty = true
        element.empty = false
        this.notes.notes[index].name = this.name
        this.notes.notes[index].text = this.text
      }else {
        let text = this.notes.notes[index].text
        console.log(text);

        let existingItem = this.notes.notes.find(item => item.text === text);
      if (existingItem) {
        this.notes.notes[index].name = this.name
        this.notes.notes[index].text = this.text
        element.exist = true
        element.empty= false

    } else if (!existingItem) {
      this.notes.notes[index].edit = false
      console.log(this.notes.notes[index].name);
      console.log(this.notes.notes[index].name);
      console.log(this.notes.notes[index]);
      element.empty = false
      element.exist = false

    }

      }

    }

}
