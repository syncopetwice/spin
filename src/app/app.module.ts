import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlModule } from 'ngx-owl-carousel';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WheelComponent } from './wheel/wheel.component';
import { CounterComponent } from './counter/counter.component';
import { CommentsComponent } from './comments/comments.component';
import { CommentComponent } from './comment/comment.component';
import { FooterComponent } from './footer/footer.component';
import { HeadlineComponent } from './headline/headline.component';
import { ModalComponent } from './modal/modal.component';
import { WinContentComponent } from './win-content/win-content.component';

import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';
import { WindowRef } from './window.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WheelComponent,
    CounterComponent,
    CommentsComponent,
    CommentComponent,
    FooterComponent,
    HeadlineComponent,
    ModalComponent,
    WinContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OwlModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    })
  ],
  providers: [
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
