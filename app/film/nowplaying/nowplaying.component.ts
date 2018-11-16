import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Http} from "@angular/http";

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.scss']
})
export class NowplayingComponent implements OnInit {
  disabled = false;
  datalist = [];
  current = 1;
  total = 0;
  constructor(private route:Router,private http:Http) { }

  ngOnInit() {
    this.http.get("/v4/api/film/now-playing?page=1&count=7").subscribe(res=>{
      this.datalist = res.json().data.films;
      this.total = res.json().data.page.total
    })
  }

  handleClick(id){
    console.log(id);
    this.route.navigate(["/detail",id]);
  }
  onScroll(){
    console.log("到底了");
    this.disabled = true;
    this.current++;
    if(this.current>this.total){
      return;
    }
    this.http.get(`/v4/api/film/now-playing?page=${this.current}&count=7`).subscribe(res=>{
      this.datalist = [...this.datalist,...res.json().data.films];
      this.disabled = false;
    })
  }
}
