import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputComponent } from './components/input/input.component';
import { HomeComponent } from './view/home/home.component';
import { ReceitasComponent } from './view/receitas/receitas.component';

import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceitasComponent,
    InputComponent,
    InputNumberComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    AppRoutingModule,
    InputTextModule,
    TableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    InputNumberModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
