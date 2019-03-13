import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { PostComponent } from './components/post/post.component';
import { Friendly404Component } from './components/friendly404/friendly404.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'parent', component: ParentComponent},
  {path: 'pipes', component: PipedemoComponent},
  {path: 'posts', component: PostComponent},
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: '**', component: Friendly404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
