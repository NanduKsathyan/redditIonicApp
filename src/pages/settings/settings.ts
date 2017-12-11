
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService } from '../../app/service/redit.service';
import { Response } from '@angular/http/src/static_response';
import { RedditPage } from '../reddit/reddit';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  category:any;
  limit:any;
  constructor(public navCtrl: NavController,private reditService:RedditService) {
    this.getDefault();
  }
  getDefault(){
    if(localStorage.getItem('category')){
      this.category=localStorage.getItem('category');     
    }
    else{
      this.category="sports";
    }
    if(localStorage.getItem('limit')){
      this.limit=localStorage.getItem('limit');     
    }
    else{
      this.limit=10;
    }
   
  }
  setDefault(){
    localStorage.setItem("category",this.category);
    localStorage.setItem("limit",this.limit);
    this.navCtrl.push(RedditPage);
  }
}
