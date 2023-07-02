import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }


  // notes: {name:string, note:string, checked:boolean}[] = []

  // notes= [
  //   {name: "Angelo", note: "bla bla", checked: false, edit:false},
  //   {name: "Ang", note: "bla ", checked: false, edit:false}
  // ]

  notes:{name:string, text:string, checked:boolean, edit:boolean}[] = []

ngOnInit() {
  console.log(this.notes);

  
}

}
