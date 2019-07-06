import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WheelComponent } from './wheel/wheel.component';
import { CounterComponent } from './counter/counter.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { FooterComponent } from './footer/footer.component';
import { HeadlineComponent } from './headline/headline.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WheelComponent,
    CounterComponent,
    CommentsComponent,
    CommentComponent,
    FooterComponent,
    HeadlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
