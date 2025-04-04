import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatSliderModule } from '@angular/material/slider'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TodosComponent } from './todo/todos.component';


@NgModule({
  declarations: [AppComponent],
  imports: [TodosComponent,MatCardModule,MatToolbarModule, MatButtonModule, MatIconModule,MatToolbarModule,MatSliderModule,BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
