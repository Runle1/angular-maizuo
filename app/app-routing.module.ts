import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FilmComponent } from './film/film.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NowplayingComponent } from './film/nowplaying/nowplaying.component';
import { ComingsoonComponent } from './film/comingsoon/comingsoon.component';
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"film",
    component:FilmComponent,
    children:[
      {
        path:"nowplaying",
        component:NowplayingComponent,
      },
      {
        path:"comingsoon",
        component:ComingsoonComponent,
      },
      {
        path:"",
        redirectTo:"/film/nowplaying",
        pathMatch:"full"
      }
    ]
  },
  {
    path:"card",
    component:CardComponent
  },
  {
    path:"detail/:id",
    component:DetailComponent
  },
  
  { //重定向
    path:'',
    redirectTo:'/home',
    pathMatch:'full' //完全匹配
  },
  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
