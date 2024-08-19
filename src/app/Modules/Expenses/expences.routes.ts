import { Routes } from '@angular/router';
import { ExpPageComponent } from './exp-page/exp-page.component';
import { ExpListComponent } from './exp-list/exp-list.component';


export const expensesRoutes: Routes = [
    {path:'expPage', component: ExpPageComponent,
        children: [
            {path: 'expList', component: ExpListComponent},
            {path: '', redirectTo: 'expList', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'expPage', pathMatch: 'full'}
];
