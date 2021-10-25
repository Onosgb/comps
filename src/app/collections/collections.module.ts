import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { TableComponent } from './table/table.component';
import { CompaniesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';
import { BiographyComponent } from './biography/biography.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [
    CollectionsHomeComponent,
    TableComponent,
    CompaniesComponent,
    PartnersComponent,
    BiographyComponent,
    TabsComponent,
  ],
  imports: [CommonModule, SharedModule, CollectionsRoutingModule],
})
export class CollectionsModule {}
