import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss'],
})
export class DisplayNoteComponent implements OnInit {
  @Input() childArray: any;
  @Output() messageDisplayToGetAllNote = new EventEmitter<string>();

  msg: any;

  ngOnInit(): void {
    
  }
  
  
  constructor(public dialog : MatDialog) {}

  receivemessageTrashToDisplay($event:any){
    console.log('event from icon to diplay ', $event)
    // this.msg= $event;
    // console.log('msg', )

    this.messageDisplayToGetAllNote.emit($event)
    

  }

  updateNote(noteupdate:any){
    console.log('calling the update')
    let dailogRef = this.dialog.open(UpdateNoteComponent,{
      data:noteupdate,
    })

    dailogRef.afterClosed().subscribe((result :any)=>{
      console.log('Dialog closed', result)
      
    } )
  }
}
