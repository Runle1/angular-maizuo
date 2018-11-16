import { Component, OnInit } from '@angular/core';
import Store from "../store";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title = "卖座电影"
  constructor(private store:Store) { }

  ngOnInit() {
    this.store.subscribe(res=>{
      console.log(res);

      this.title = res;
    })
  }

}
