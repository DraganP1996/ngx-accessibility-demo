import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule
  ],
  exports: [ ShellComponent ]
})
export class ShellModule { }
