import { Component } from '@angular/core';
import { NotesService } from '../../service/notes.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  constructor(private notes: NotesService) {}

  name:string = "";
  text:string = "";

  error:boolean = false
  exist:boolean = false;


  addNote() {
   let obj:any = {name: this.name, text:this.text, check: false}
   if (obj.name == false || obj.text == false) {
    this.error= true
    
   }else {
    console.log("else");
    
    for (let index = 0; index < this.notes.notes.length; index++) {
      const element = this.notes.notes[index];
      console.log("elemento");
      
      if (element.text === obj.text ) {
        this.exist = true;
      }else {
        this.notes.notes.push(obj)
        this.error= false
        console.log(this.error);
        this.exist = false

      }
      
    }

   }

    console.log(this.notes.notes);
    this.name = ""
    this.text = ""
    
  }


}
