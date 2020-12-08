import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent,children: [
    {
      path: 'child-a', 
      component: HomeComponent,
    },] }
  
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)],

    exports: [RouterModule]
  
})
export class LayoutRoutingModule { }
