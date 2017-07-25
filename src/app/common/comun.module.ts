import {HeaderComponent} from '../header/header.component';
import {AddPlusPipe} from './pipes/add-plus.pipe';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';

@NgModule({
  declarations: [
    HeaderComponent,
    AddPlusPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HeaderComponent,
    AddPlusPipe
  ]
})
export class ComunModule { }
