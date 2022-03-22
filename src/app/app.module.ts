import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { AgmCoreModule } from '@agm/core';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Modulo general de AngularMaterial
    MaterialModule, // Módulo personalizado de agrupación de los componentes de AngularMaterial
    ReactiveFormsModule, // Módulo que permite el uso de los Formularios Reactivos
    // importamos según documentación el Angular Google Maps
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBmBwNx4zfuKgHLCPo9BQmsb2puF6Yk8ac' // la apiKey la obtenemos según documentación de Google Cloud Plataform
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
