import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  token: any;

  constructor(private httpService: HttpService) {
    this.token = localStorage.getItem('token');
  }
  createNote(data: any) {
    console.log(this.token);

    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      'notes/addNotes',
      data,
      true,
      httpOption
    );
  }

  getAllNote() {
    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.GetService('notes/getNotesList', true, httpOption);
  }
  trashNoteService(data: any) {
    console.log(this.token);

    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      'notes/trashNotes',
      data,
      true,
      httpOption
    );
  }
  trashNoteListService() {
    console.log(this.token);

    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.GetService(
      'notes/getTrashNotesList',
      true,
      httpOption
    );
  }

  ArchiveNoteService(data: any) {
    console.log(this.token);

    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.PostService(
      'notes/archiveNotes',
      data,
      true,
      httpOption
    );
  }
  ArchiveNoteListService() {
    console.log(this.token);

    let httpOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        Authorization: this.token,
      }),
    };
    return this.httpService.GetService(
      'notes/getArchiveNotesList',
      true,
      httpOption
    );
  }
}
