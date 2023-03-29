import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.scss']
})
export class BinComponent implements OnInit{
ngOnInit(): void {
  this.trashNoteList()
}
constructor(private noteService:NoteService){}
@Input() noteArray: any =[];


trashNoteList() {
  this.noteService.trashNoteListService().subscribe((result: any) => {
    console.log('notes moved to bin',result);
    this.noteArray = result.data.data;
    this.noteArray=this.noteArray.filter((req :any) =>{
      return req.isDeleted == true
    });
    this.noteArray.reverse();
  });
}

}
