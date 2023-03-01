import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit {
  ngOnInit(): void {
    this.trashNoteList()
  }
  constructor(private noteService:NoteService){}
  @Input() noteArray:any=[];

  trashNoteList(){
    this.noteService.trashNoteListService().subscribe((result: any ) =>{
      console.log('notes moved to trash' , result);
      this.noteArray = result.data.data;
      this.noteArray =this.noteArray.filter((req : any) => {
        return req.isDeleted == true
      })
      this.noteArray.reverse();
    })
  }
}
