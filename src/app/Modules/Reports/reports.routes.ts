import { Routes } from '@angular/router';
import { ReportPageComponent } from './report-page/report-page.component';
import { ReportDailyComponent } from './report-daily/report-daily.component';

export const reportsRoutes: Routes = [
    {path: 'reportPage', component: ReportPageComponent,
        children: [
            {path: 'reportDaily', component: ReportDailyComponent},
            {path: '', redirectTo: 'reportDaily', pathMatch: 'full'}
        ]
    },
    {path: '', redirectTo: 'reportPage', pathMatch: 'full'}
];
