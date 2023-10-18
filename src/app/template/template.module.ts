import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],

  exports: [
    NavbarComponent,
    SidebarComponent,
    HomeComponent, FooterComponent],
})
export class TemplateModule {}
