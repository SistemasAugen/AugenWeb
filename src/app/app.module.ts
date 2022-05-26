import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OpticalManufacturingComponent } from './optical-manufacturing/optical-manufacturing.component';
import { OpticalLaboratoriesComponent } from './optical-laboratories/optical-laboratories.component';
import { MachineryEquipmentComponent } from './machinery-equipment/machinery-equipment.component';
import { InnovationDevelopmentComponent } from './innovation-development/innovation-development.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OpticalManufacturingComponent,
    OpticalLaboratoriesComponent,
    MachineryEquipmentComponent,
    InnovationDevelopmentComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
