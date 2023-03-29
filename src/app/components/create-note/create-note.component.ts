import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss'],
})
export class CreateNoteComponent implements OnInit {
  title: any;
  note: any;
  show: boolean = false;
  @Output() messageCreateToDisplay = new EventEmitter<string>();
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
      this.messageCreateToDisplay.emit(response);
    });
  }
}
