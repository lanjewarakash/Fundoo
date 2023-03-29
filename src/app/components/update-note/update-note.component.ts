import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss'],
})
export class UpdateNoteComponent {
  title: any;
  description: any;
  Id: any;
  color:any
  @Output() messageUpdateToDisplay = new EventEmitter<string>();
  @Output() emitcolour = new EventEmitter<string>();

  constructor(
    private noteServive: NoteService,
    public dailogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    if (data) {
      this.title = this.data.title;
      this.description = this.data.description;
      this.Id = this.data.id;
      this.color= this.data.color
    }
  }

  updateNote() {
    console.log('updated data is ', this.title);
    let data = {
      title: this.title,
      description: this.description,
      noteId: this.Id,
    };
    this.noteServive.updateNote(data).subscribe((result: any) => {
      console.log(result);
      this.messageUpdateToDisplay.emit(result)
    });

    this.dailogRef.close();
  }


  receivemessageUpdateToDisplay($event:any){
    // this.color=event
    this.updateNote()
  }


}
