import { Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LogInComponent } from './log-in/log-in.component';
import { customersRoutes } from './Modules/Customers/customers.routes';
import { expensesRoutes } from './Modules/Expenses/expences.routes';
import { reportsRoutes } from './Modules/Reports/reports.routes';
import { homeRoutes } from './Modules/Home/home.routes';

export const routes: Routes = [
    {path: 'login', component: LogInComponent},
    {path: 'mainpage', component: MainpageComponent,
        children: [
            {
                path: 'Home',
                loadChildren: () => import('./Modules/Home/home.routes').then(r=>homeRoutes)
            },
            {
                path: 'Expenses',
                loadChildren: () => import('./Modules/Expenses/expences.routes').then(r=>expensesRoutes)
            },
            {
                path: 'Customers',
                loadChildren: () => import('./Modules/Customers/customers.routes').then(r=>customersRoutes)
            },
            {
                path: 'Reports',
                loadChildren: () => import('./Modules/Reports/reports.routes').then(r=>reportsRoutes)
            },
            {path: '', redirectTo: 'Home', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'login', pathMatch: 'full'}
];
