import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentationRoutingModule } from './documentation-routing.module';
import { ClickableElementDirectiveModule } from './clickable-element-directive/clickable-element-directive.module';
import { DynamicButtonAriaLabelModule } from './dynamic-button-aria-label/dynamic-button-aria-label.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DocumentationRoutingModule,
    ClickableElementDirectiveModule,
    DynamicButtonAriaLabelModule
  ]
})
export class DocumentationModule { }
