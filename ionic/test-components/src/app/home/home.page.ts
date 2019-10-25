import { Component } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'action-sheet.component.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public actionSheetCtrl:ActionSheetController) {}
	async showActionSheet(){
		const actionSheet = await this.actionSheetCtrl.create({
			  header: 'Albums',
			  buttons: [{
				text: 'Delete',
				role: 'destructive',
				icon: 'happy',
				handler: () => {
				  console.log('Delete clicked');
				}
			  }, {
				text: 'Share',
				icon: 'share',
				handler: () => {
				  console.log('Share clicked');
				}
			  }, {
				text: 'Play (open modal)',
				icon: 'arrow-dropright-circle',
				handler: () => {
				  console.log('Play clicked');
				}
			  }, {
				text: 'Favorite',
				icon: 'heart',
				handler: () => {
				  console.log('Favorite clicked');
				}
			  }, {
				text: 'Cancel',
				icon: 'close',
				role: 'cancel',
				handler: () => {
				  console.log('Cancel clicked');
				}
			  }]
			});
		await actionSheet.present();
	}
}
