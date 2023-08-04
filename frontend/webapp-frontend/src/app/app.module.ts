import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { RightbarComponent } from './rightbar/rightbar.component';
import { CenterComponent } from './center/center.component';
import { PostComponent } from './post/post.component';
import { PostElementComponent } from './post-element/post-element.component';
import {FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { UnsortedlistComponent } from './unsortedlist/unsortedlist.component';
import { UnsortedlistOfObjectsComponent } from './unsortedlist-of-objects/unsortedlist-of-objects.component';
import { NgIFDirectiveComponent } from './ng-if-directive/ng-if-directive.component';
import { NgSwitchDirectiveComponent } from './ng-switch-directive/ng-switch-directive.component';
import { NgStyleDirectiveComponent } from './ng-style-directive/ng-style-directive.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftbarComponent,
    RightbarComponent,
    CenterComponent,
    PostComponent,
    PostElementComponent,
    FormComponent,
    UnsortedlistComponent,
    UnsortedlistOfObjectsComponent,
    NgIFDirectiveComponent,
    NgSwitchDirectiveComponent,
    NgStyleDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
