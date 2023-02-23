import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent  implements OnInit{
  title: any;
  note: any;
  show: boolean = false;
  constructor(private noteService: NoteService) {}

  ngOnInit() {}

  showHide() {
    this.show = true;
  }

  addNote() {
    this.show = false;
    console.log(this.title, this.note);
    let data = {
      title: this.title,
      description: this.note,
    };
    console.log(data);
    this.noteService.createNote(data).subscribe((response: any) => {
      console.log('create all notes', response);
    });
  }
}
