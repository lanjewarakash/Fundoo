import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/service/noteService/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
  ngOnInit(): void {}

  @Input() isIcon: any;
  constructor(private noteService: NoteService) {}
  isDeleted: any;
  isArchived : any;
  id: any;

  trashNote() {
    console.log(this.isIcon.id);
    let data = {
      noteIdList: [this.isIcon.id],
      isDeleted: true,
    };
    console.log('getting noteID', data.noteIdList);
    this.noteService.trashNoteService(data).subscribe((result: any) => {
      console.log('notes moved to bin', result);
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
    });
  }
}
