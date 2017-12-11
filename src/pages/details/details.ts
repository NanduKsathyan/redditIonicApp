import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {
    itemDetails:any;
  constructor(public navCtrl: NavController,public navParam :NavParams) {
    this.itemDetails=navParam.get('val');
  }

}
