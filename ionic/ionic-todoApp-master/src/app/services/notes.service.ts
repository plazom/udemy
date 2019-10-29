import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(public storage: Storage) { }

  getAll() {
      return this.storage.get('notes');
  }

  save(data){
    this.storage.set('notes', data);
  }
}
