import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatRadioModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTableModule,
  MatToolbarModule,
} from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ViewBugsComponent } from './view-bugs/view-bugs.component';
import { ViewFishesComponent } from './view-fishes/view-fishes.component';

const ANGULAR_IMPORTS = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  AppRoutingModule,
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
  MatPaginatorModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewFishesComponent,
    ViewBugsComponent,
    SidenavComponent,
  ],
  imports: [...ANGULAR_IMPORTS, ...MATERIAL_IMPORTS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
