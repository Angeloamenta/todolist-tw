import { Component, numberAttribute, OnInit } from '@angular/core';
import { NotesService } from '../../service/notes.service';
import { Note } from 'src/app/model/note';


@Component({
  selector: 'app-globalbuttons',
  templateUrl: './globalbuttons.component.html',
  styleUrls: ['./globalbuttons.component.css']
})
export class GlobalbuttonsComponent {

  constructor(private notes: NotesService) {}

  notebase:any


  ngOnInit() {
    this.notebase = this.notes.notes
  }

  selectAll() {
    for (let index = 0; index < this.notes.notes.length; index++) {
      const element = this.notes.notes[index];
      // console.log(element);
      element.checked = true
      // console.log(element);

      
    }
  }

  deselectAll() {
    for (let index = 0; index < this.notes.notes.length; index++) {
      const element = this.notes.notes[index];
      // console.log(element);
      element.checked = false;
      
      
    }
  }

  deleteSelected() {
    // usato for inverso perchè eliminando gli elementi gli index cambiavano e creava problemi
    for (let index = this.notes.notes.length - 1; index >= 0; index--) {
      let element = this.notes.notes[index];
      if (element.checked) {
        this.notes.notes.splice(index, 1);
      }
    }
  }

   isDisabled() {
    let disabled = (element:any) => element.checked === true;
    // console.log("sss",this.notes.notes.some(even));
    if(this.notes.notes.some(disabled) === true){

      return true
    } else {
      return false
    }
    
    
  }

}
