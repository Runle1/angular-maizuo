import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FilmComponent } from './film/film.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NowplayingComponent } from './film/nowplaying/nowplaying.component';
import { ComingsoonComponent } from './film/comingsoon/comingsoon.component';
import { DetailComponent } from './detail/detail.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NavbarComponent } from './navbar/navbar.component';
import Store from "./store";
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    FilmComponent,
    NotfoundComponent,
    NowplayingComponent,
    ComingsoonComponent,
    DetailComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    SwiperModule, //轮播
    InfiniteScrollModule
    //导入其他有用的模块 双向数据绑定 路由模块 http模块
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
