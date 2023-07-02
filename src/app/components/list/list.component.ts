import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NotesService } from '../../service/notes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  notebase:any;

  constructor(public notes: NotesService) {}

  ngOnInit(): void {
     this.notebase = this.notes.notes
    // let obj = {name:"nome", note:"nota", checked:true};    
    
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("cambio",changes);

    let valore = changes['notes.notes']
    console.log(valore);
    
    
  }

 





}

