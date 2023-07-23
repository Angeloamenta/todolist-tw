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

  this.error= false
  this.exist= false
  
  for (let index = 0; index < this.notes.notes.length; index++) {
    const element = this.notes.notes[index];

    element.edit = false
    element.empty = false
    element.exist = false
    
  }
  let obj:any = {name: this.name, text:this.text, checked: false, empty:false ,exist:false}
  if (obj.name == false || obj.text == false) {
    this.error= true
    this.exist= false

  } else {
    if (this.notes.notes.length <=0) {
      this.notes.notes.push(obj)
    }else {
      let existingItem = this.notes.notes.find(item => item.text.toLowerCase() === obj.text.toLowerCase());
      if (existingItem) {
      this.exist = true
      this.error= false
      
    } else if (!existingItem) {
      this.exist = false
      this.error= false

      this.notes.notes.push(obj)

    }
    }
  }

  this.name = ""
  this.text = ""
}
  


}
