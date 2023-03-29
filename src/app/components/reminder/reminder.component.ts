import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  constructor(private noteService:NoteService){}
  ngOnInit(): void {
    this.reminderNoteList()
  }
@Input() noteArray: any =[];


  reminderNoteList() {
    this.noteService.remainderServiceList().subscribe((result: any) => {
      console.log('notes moved to reminder',result);
      this.noteArray = result.data.data;
      this.noteArray.reverse();
      
    });
  }

}
