import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component'
import { LibraryComponent } from '../library/library.component'
import { CreateComponent } from '../create/create.component'
import { CreateDesignComponent } from '../create-design/create-design.component'
import { CreateSettingsComponent } from '../create-settings/create-settings.component'
import { CreateContentComponent } from '../create-content/create-content.component'
import { ShareComponent } from '../share/share.component'
import { ResultsComponent } from '../results/results.component'

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
    },
    {
        path: 'library',
        component: LibraryComponent,
    },
    {
        path: 'create',
        component: CreateComponent,
        children: [
          { path: 'content', component: CreateContentComponent },
          { path: 'design', component: CreateDesignComponent },
          { path: 'settings', component: CreateSettingsComponent },
        ]
    },
    {
        path: 'share',
        component: ShareComponent,
    },
    {
        path: 'results',
        component: ResultsComponent,
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
