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
  let obj:any = {name: this.name, text:this.text, checked: false}
  if (obj.name == false || obj.text == false) {
    this.error= true
  } else {
    if (this.notes.notes.length <=0) {
      this.notes.notes.push(obj)
    }else {
      let existingItem = this.notes.notes.find(item => item.text === obj.text);
      if (existingItem) {
      this.exist = true
    } else if (!existingItem) {
      this.exist = false
      this.notes.notes.push(obj)

    }
    }
  }

}
  

  // addNote() {
  //   let obj:any = {name: this.name, text:this.text, checked: false}
  //   if (obj.name == false || obj.text == false) {
  //    this.error= true
     
  //   }else {
  //    if (this.notes.notes.length <= 0) {
  //      this.notes.notes.push(obj)
  //      console.log(this.error);
  //    } else {
  //      for (let index = 0; index < this.notes.notes.length; index++) {      
  //        const element = this.notes.notes[index];
         
  //        if (element.text === obj.text ) {
  //          this.exist = true;
   
  //        }else{
  //          console.log("oggetto", obj);
           
  //          this.exist = false;
  //          this.error= false;
  //          console.log(this.exist);
           
  //          this.notes.notes.push(obj)
  //          this.exist = false;
 
   
  //        }
         
  //      }
  //    }
     
 
  //   }
 
  //    console.log(this.notes.notes);
  //    this.name = ""
  //    this.text = ""
     
  //  }


}
