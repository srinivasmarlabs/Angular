import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipedemoComponent } from './components/pipedemo/pipedemo.component';
import { ReversetextPipe } from './pipes/reversetext.pipe';
import { PiglatinPipe } from './pipes/piglatin.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ObservabledemoService } from './services/observabledemo.service';
import { ObservabledemoComponent } from './components/observabledemo/observabledemo.component';
import { PostComponent } from './components/post/post.component';
import { PostService } from './services/post.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { Friendly404Component } from './components/friendly404/friendly404.component';

@NgModule({
  declarations: [
    AppComponent,
    PipedemoComponent,
    ReversetextPipe,
    PiglatinPipe,
    ParentComponent,
    ChildComponent,
    ObservabledemoComponent,
    PostComponent,
    HomeComponent,
    Friendly404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ObservabledemoService,
    PostService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
