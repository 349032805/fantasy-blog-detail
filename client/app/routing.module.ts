import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutMe } from './aboutMe/aboutMe.component';
import { LeaveMessage } from './leaveMessage/leaveMessage.component';
import { BlogDetailComponent } from './blogDetail/blogDetail.component';


const routes: Routes = [
  { path: '', component: AboutMe },
  { path: 'aboutMe', component: AboutMe },
  { path: 'leaveMessage', component: LeaveMessage },
  { path: 'blogDetail/:id', component: BlogDetailComponent },
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})

export class RoutingModule { }
