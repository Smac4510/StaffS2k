import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ReceivingComponent } from './receiving/receiving.component';
import { ReleasingComponent } from './releasing/releasing.component';
import { HomeMainComponent } from './home-main/home-main.component';

export const homeRoutes: Routes = [
    {path: 'HomeMain', component: HomeMainComponent,
        children: [
            {path: 'HomePage', component: HomePageComponent},
            {path: 'receiving', component: ReceivingComponent},
            {path: 'releasing', component: ReleasingComponent},
            {path: '', redirectTo: 'HomePage', pathMatch: 'full'}
        ]
    },
    
    {path: '', redirectTo: 'HomeMain', pathMatch: 'full'}
];
