import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent implements OnInit{
  noteArray = [];

  constructor(private noteService:NoteService){}
  ngOnInit(): void {
   this.getAllNotes();
  }
  getAllNotes(){
    this.noteService.getAllNote().subscribe((response : any) => {
        console.log(response.data.success),
        console.log(response.data.data),
        (this.noteArray = response.data.data);
        this.noteArray = this.noteArray.filter((result : any )=>{
          return result.isDeleted == false && result.isArchived == false
        });
        this.noteArray.reverse();
        console.log('this is note array', this.noteArray)

    })

  }

  }

