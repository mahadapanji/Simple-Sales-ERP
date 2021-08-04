import { sanitizeIdentifier } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { SalesOrderListComponent } from './sales-order/sales-order-list/sales-order-list.component';

const routes: Routes = [
  {path:'salesorder', component:SalesOrderComponent},
  {path:'salesorderlist', component:SalesOrderListComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
