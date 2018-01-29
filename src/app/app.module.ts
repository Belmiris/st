import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ItemLookupComponent } from './item-lookup/item-lookup.component';
import { ReceiveInventoryComponent } from './receive-inventory/receive-inventory.component';
import { TransferComponent } from './transfer/transfer.component';
import { MiscAdjustmentsComponent } from './misc-adjustments/misc-adjustments.component';
import { InventoryCountsComponent } from './inventory-counts/inventory-counts.component';
import { TransfersComponent } from './transfers/transfers.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'itemlookup', component: ItemLookupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ItemLookupComponent,
    ReceiveInventoryComponent,
    TransferComponent,
    MiscAdjustmentsComponent,
    InventoryCountsComponent,
    TransfersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
