import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatTableModule,
  MatSlideToggleModule,
  MatRadioModule,
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewCritterComponent } from './view-critter/view-critter.component';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ANGULAR_IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
];

const MATERIAL_IMPORTS = [
  MatToolbarModule,
  MatCardModule,
  MatSidenavModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatTableModule,
  MatSlideToggleModule,
  MatRadioModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewCritterComponent,
    SidenavComponent,
  ],
  imports: [...ANGULAR_IMPORTS, ...MATERIAL_IMPORTS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
