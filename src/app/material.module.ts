import { NgModule } from '@angular/core';
MatCardModule
import {
  MatButtonModule,

} from "@angular/material/button";
import {
  MatToolbarModule,

} from "@angular/material/toolbar";
import {
  MatIconModule
} from "@angular/material/icon";
import {
  MatMenuModule
} from "@angular/material/menu";
import {
  MatCardModule
} from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule, MatFormFieldModule, MatSelectModule, MatSliderModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule, MatFormFieldModule, MatSelectModule, MatSliderModule
  ]
})
export class MaterialModule { }