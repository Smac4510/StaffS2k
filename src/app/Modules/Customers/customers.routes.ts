import { Routes } from '@angular/router';
import { CustomerPageComponent } from './customer-page/customer-page.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { ViewTransactionsComponent } from './view-transactions/view-transactions.component';

export const customersRoutes: Routes = [
    {path: 'CustomerPage', component: CustomerPageComponent,
        children: [
            {path: 'ViewCustomer', component: ViewCustomerComponent},
            {path: 'ViewTransactions', component: ViewTransactionsComponent},
            {path: '', redirectTo: 'ViewCustomer', pathMatch: 'full'}
        ]
    },
    
    {path: '', redirectTo: 'CustomerPage', pathMatch: 'full'}
];
