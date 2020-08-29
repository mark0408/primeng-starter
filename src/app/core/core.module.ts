import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './template/aside/aside.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TabViewModule } from 'primeng/tabview';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { BreadcrumbsComponent } from './template/breadcrumb/breadcrumbs.component';
import { BreadcrumbModule } from 'primeng/breadcrumb';



@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    BreadcrumbsComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    CommonModule,
    PanelMenuModule,
    BreadcrumbModule,
    TabViewModule    
  ],
  exports: [    
    HeaderComponent, 
    AsideComponent,
    BreadcrumbsComponent,
    FooterComponent
  ],
 
})
export class CoreModule { }
