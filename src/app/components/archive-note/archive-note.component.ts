import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-archive-note',
  templateUrl: './archive-note.component.html',
  styleUrls: ['./archive-note.component.scss']
})
export class ArchiveNoteComponent implements OnInit{
  ngOnInit(): void {
    this.archiveNoteList()
  }
  constructor(private noteService : NoteService){}
  @Input() noteArray: any =[];

 archiveNoteList(){
    console.log("archive is api is calling")
    this.noteService.ArchiveNoteListService().subscribe((result :any )=>{
      console.log("archive data is " ,result)
      this.noteArray=result.data.data;
      this.noteArray=this.noteArray.filter((req : any )=>{
        return req.isArchived==true;
      });
      this.noteArray.reverse();
    })
  }
}
