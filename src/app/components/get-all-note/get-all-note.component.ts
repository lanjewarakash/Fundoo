import { Component } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-get-all-note',
  templateUrl: './get-all-note.component.html',
  styleUrls: ['./get-all-note.component.scss']
})
export class GetAllNoteComponent {

  constructor(private noteService:NoteService){

  }
  ngOnInit(): void {

    this.getAllNotes()
    
  }
  getAllNotes(){
    this.noteService.getAllNote().subscribe((response : any) => {
        console.log(response.data.success),
        console.log(response.data.data);

    })

  }

  }

