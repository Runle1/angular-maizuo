import { Component, OnInit } from '@angular/core';
import axios from "axios";
import {Http} from "@angular/http";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  current = 1;
  total = 0;
  datalist = [];
  disabled = false;
  config = {
    pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay:2000,
            loop:true,
  }


  constructor(private http:Http) { }

  ngOnInit() {

    // axios.get("/v4/api/billboard/home?__t=1542281000824").then(res=>{
    //   console.log(res.data);
      
    // })

    // this.http.get("/v4/api/film/now-playing?__t=1542281000827&page=1&count=5").subscribe(res=>{
    //   console.log(res.json());
    // })

    this.http.get("/v4/api/film/now-playing?__t=1542281000827&page=1&count=5").toPromise().then(res=>{

      console.log(res.json());
      this.datalist = res.json().data.films;
      this.total = res.json().data.page.total
    })
  }
  onScroll(){
    console.log("到底了");
    this.disabled = true;
    this.current++;
    if(this.current>this.total){
      return;
    }
    this.http.get(`/v4/api/film/coming-soon?__t=1542366713366&page=${this.current}&count=3`).toPromise().then(res=>{

      this.datalist = [...this.datalist,...res.json().data.films];
    })
  }
}
