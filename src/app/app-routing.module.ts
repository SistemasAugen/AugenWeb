import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OpticalManufacturingComponent } from './optical-manufacturing/optical-manufacturing.component';
import { OpticalLaboratoriesComponent } from './optical-laboratories/optical-laboratories.component';
import { MachineryEquipmentComponent } from './machinery-equipment/machinery-equipment.component';
import { InnovationDevelopmentComponent } from './innovation-development/innovation-development.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'manufactura-optica', component: HomeComponent },
    { path: 'laboratorios-opticos', component: HomeComponent },
    { path: 'maquinaria-y-equipo', component: HomeComponent },
    { path: 'innovacion-desarrollo', component: HomeComponent },
    { path: 'contacto', component: HomeComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
