import { Component, numberAttribute } from '@angular/core';
import { NotesService } from '../../service/notes.service';


@Component({
  selector: 'app-globalbuttons',
  templateUrl: './globalbuttons.component.html',
  styleUrls: ['./globalbuttons.component.css']
})
export class GlobalbuttonsComponent {

  constructor(private notes: NotesService) {}

  selectAll() {
    for (let index = 0; index < this.notes.notes.length; index++) {
      const element = this.notes.notes[index];
      console.log(element);
      element.checked = true
      
      
    }
  }

  deselectAll() {
    for (let index = 0; index < this.notes.notes.length; index++) {
      const element = this.notes.notes[index];
      console.log(element);
      element.checked = false;
      
      
    }
  }

  deleteSelected() {
      for (let index = 0; index < this.notes.notes.length; index++) {
        let element = this.notes.notes[index];
        if (element.checked == true) {
          this.notes.notes.splice(index, 1);
             
        }
      } 

  //    this.notes.notes.forEach((element,index)=>{
  //     if(element.checked== true) this.notes.notes.splice(index,1);
  //  });
  console.log(this.notes.notes);
  

    
  }

}
