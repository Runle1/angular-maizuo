import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";
import Store from "../store";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  filminfo = null;
  constructor(private route:ActivatedRoute,private http:Http,private store:Store) { }

  ngOnInit() {
    this.route.params.subscribe(data=>{
      console.log(data);
      this.httpMethod(data.id);
    })
  }

  httpMethod(id){
    this.http.get(`/v4/api/film/${id}?__t=1542355745991`).subscribe(res=>{
      console.log(res.json());
      this.filminfo = res.json().data.film
      
      this.store.publish(this.filminfo.name);
    })
  }

}
