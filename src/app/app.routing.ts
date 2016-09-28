import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectPinboardComponent } from './project-pinboard/project-pinboard.component';
import {ProjectHomeComponent} from "./project-home/project-home.component";
import {CreateProjectTaskComponent} from './create-project-task/create-project-task.component';

const appRoutes: Routes = [
    { path: 'project-pinboard', component: ProjectPinboardComponent },
    { path: 'project/:project-id', component: ProjectHomeComponent },
    { path: 'project/:project-id/tasks?new', component: CreateProjectTaskComponent },
    { path: '', redirectTo: 'project-pinboard', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);