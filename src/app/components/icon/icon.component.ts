import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/note/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  constructor(private noteService: NoteService) {}
  ngOnInit(): void {}

  @Input() isIcon: any;
  // @Input() childArray: any;

  @Output() messageTrashToDisplay = new EventEmitter<string>();

  isDeleted: any;
  isArchived: any;
  id: any;
  color: any;
  date: any;
  

  dateAndTime: Array<any> = [
    { laterToday: '20:00', Tomorrow: '8:00', nextWeek: 'Mon,8:00' },
  ];

  colors: Array<any> = [
    { code: '#fff' },
    { code: '#f28b82' },
    { code: '#fbbc04' },
    { code: '#FFFF00' },
    { code: '#ccff90' },
    { code: '#a7ffeb' },
    { code: '#cbf0f8' },
    { code: '#aecbfa' },
    { code: '#d7aefb' },
    { code: '#fdcfe8' },
    { code: '#e6c9a8' },
    { code: '#e8eaed' },
  ];

  trashNote() {
    console.log(this.isIcon.id);
    let data = {
      noteIdList: [this.isIcon.id],
      isDeleted: true,
    };
    console.log('getting noteID', data.noteIdList);
    this.noteService.trashNoteService(data).subscribe((result: any) => {
      console.log('notes moved to bin', result);
      this.messageTrashToDisplay.emit(result);
    });
  }

  archiveNote() {
    console.log(this.isIcon.id);
    let data = {
      noteIdList: [this.isIcon.id],
      isArchived: true,
    };
    console.log('getting noteID', data.noteIdList);
    this.noteService.ArchiveNoteService(data).subscribe((data: any) => {
      console.log('notes moved to archived', data);
      this.messageTrashToDisplay.emit(data);
    });
  }

  NoteColorChange(colour: any) {
    console.log(this.isIcon.id);
    let data = {
      noteIdList: [this.isIcon.id],
      color: colour,
    };
    console.log('getting noteID', data.noteIdList);
    this.noteService.updatecolor(data).subscribe((data: any) => {
      console.log('notes moved to archived', data);
      this.messageTrashToDisplay.emit(data);
    });
  }

  setReminder() {
    console.log(this.date);
    const rem = new Date(this.date);
    console.log(rem);

    let data = {
      reminder: [rem],
      noteIdList: [this.isIcon.id],

      userId: localStorage.getItem('userId'),
    };
    this.noteService.remainderService(data).subscribe((res: any) => {
      console.log('calling API ', res);
      this.messageTrashToDisplay.emit(res);
    });
  }

  currentDate() {
    const currentDate = new Date();
    console.log(currentDate);

    let data = {
      reminder: [currentDate],
      noteIdList: [this.isIcon.id],
      userId: localStorage.getItem('userId'),
    };
    this.noteService.remainderService(data).subscribe((res: any) => {
      console.log('calling API ', res);
      this.messageTrashToDisplay.emit(res);
    });

    //   }
    // }
  }

  
nextDay_timeAt8pm(){
  var currentDate = new Date();
  var nextdate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 20, 0, 0 );
  if(nextdate > currentDate){
      nextdate.setDate(nextdate.getDate() + 1);
  }
  console.log("Next Date : "+ nextdate.toLocaleString());
  let data = {
    reminder: [nextdate],
    noteIdList: [this.isIcon.id],
    userId: localStorage.getItem('userId'),
  };
  this.noteService.remainderService(data).subscribe((res: any) => {
    console.log('calling API ', res);
    this.messageTrashToDisplay.emit(res);
  });
  

}
DayAfterMondayO(){
  var currentDate = new Date();
  var nextdate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() );
  if(nextdate < currentDate){
      nextdate.setDate(nextdate.getDate() + 16);
  }
  console.log("DayAfterMonday : "+ nextdate.toLocaleString());
  let data = {
    reminder: [nextdate],
    noteIdList: [this.isIcon.id],
    userId: localStorage.getItem('userId'),
  };
  this.noteService.remainderService(data).subscribe((res: any) => {
    console.log('calling API ', res);
    this.messageTrashToDisplay.emit(res);
  });

}

}
