import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpsertNotePage } from '../upsert-note/upsert-note.page';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  notes: Note[];
  constructor(public modalController: ModalController, private notesService: NotesService) { }

  ngOnInit() {
    this.notesService.getAll().then((val)=>{
      this.notes = val || [];
    });
  }

  add(){
    this.presentModal();
  }

  edit(note: Note){
    this.presentModal(note);
  }

  delete(note: Note){
    let index = this.notes.indexOf(note);

    if(index > -1){
      this.notes.splice(index, 1);
      this.notesService.save(this.notes);
      return;
    }
  }

  async presentModal(note?: Note){

    let modalObj = {
      component: UpsertNotePage
    };

    if(note){
        modalObj['componentProps'] = {note};
    }
    const modal = await this.modalController.create(modalObj);

    await modal.present();
    const {data} = await modal.onWillDismiss();

    if(data){
      let foundFlag = false;

      for (let index = 0; index < this.notes.length; index++) {
       if(this.notes[index] === data){
         this.notes[index]  = data;
         foundFlag = true;
         break;
       }
        
      }

      if(!foundFlag){
        this.notes.push(data);
      }
      this.notesService.save(this.notes);
    }
  }
}
