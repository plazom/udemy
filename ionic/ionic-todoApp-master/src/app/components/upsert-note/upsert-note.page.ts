import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-upsert-note',
  templateUrl: './upsert-note.page.html',
  styleUrls: ['./upsert-note.page.scss'],
})
export class UpsertNotePage implements OnInit {

  constructor(public modalController: ModalController) { }
  @Input() note: Note;
  ngOnInit() {

    if (!this.note) {
      this.note = {
        title: 'some title',
        text: 'some text'
      };
    }

  }

  close() {
    this.modalController.dismiss();
  }

  submit() {
    this.modalController.dismiss(this.note);
  }

}
