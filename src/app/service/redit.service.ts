import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class RedditService{
    baseUrl:string;
    constructor(private http:Http){
        this.baseUrl="https://www.reddit.com/r";
    }
    getPosts(category,limit){
        return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit).map(res=>res.json());
        // this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit).subscribe((res:Response)=>{
        //     const wether=res.json();
        //     console.log(wether);
        // })
        // return this.http.get("https://api.coinmarketcap.com/v1/ticker/?limit=10").subscribe((res:Response)=>{
        //         const wether=res.json();
        //         console.log(wether);
        //     })
    }
} 