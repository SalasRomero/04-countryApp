import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    SidebarComponent,
    SearchBoxComponent,
    HomePageComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AboutPageComponent,
    ContactPageComponent,
    SidebarComponent,
    SearchBoxComponent,
    LoadingSpinnerComponent,
    HomePageComponent
  ]
})
export class SharedModule { }
