import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickableElementDirective } from 'ngx-accessibility';
import { ClickableElementDirectiveComponent } from './clickable-element-directive/clickable-element-directive.component';
import { DynamicButtonAriaLabelComponent } from './dynamic-button-aria-label/dynamic-button-aria-label.component';

const routes: Routes = [
  {
    path: 'dynamic-button-aria-label',
    component: DynamicButtonAriaLabelComponent
  },
  {
    path: 'clickable-element',
    component: ClickableElementDirectiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
