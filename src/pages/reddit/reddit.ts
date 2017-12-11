import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService } from '../../app/service/redit.service';
import { Response } from '@angular/http/src/static_response';
import { DetailsPage} from '../details/details';
@Component({
  selector: 'page-reddit',
  templateUrl: 'reddit.html'
})
export class RedditPage {
  items:any;
  category:any;
  limit:any;
  default:any;
  constructor(public navCtrl: NavController,private reditService:RedditService) {
    this.getDefault();
    this.default='../assets/imgs/default-placeholder.png';
  }
  ngOnInit(){
    this.getPosts(this.category,this.limit);
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
  getPosts(category,limit){
    this.reditService.getPosts(category,limit).subscribe(response =>{
      this.items=response.data.children;
      console.log(this.items);
    });
  }
  viewItem(val){    
    this.navCtrl.push(DetailsPage,{
      val:val
    });
  }
  changeCategory(){
    this.getPosts(this.category,this.limit);
    
  }
}
