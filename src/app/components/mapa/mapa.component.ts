/* Componente creado para el manejo de la info del MAPA */
import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  // creamos una propiedad Arreglo del tipo Marcador vacío
  marcadores: Marcador[] = [];

  // copiamos las propiedades según documentación de Angular Google Maps
  lat = 51.678418;
  lng = 7.809007;
  
  // inyectamos el Snackbar y el Dialog
  constructor(public snackBar: MatSnackBar,
              public dialog: MatDialog) {

    // buscamos si existen Marcadores guardados en el LocalStorage
    if(localStorage.getItem('marcadores')) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
   }

  ngOnInit(): void {
  }

  // creamos el método para AGREGAR un marcador en el Mapa
  agregarMarcador(evento: any) {
    
    // propiedad
    const coords: {lat: number, lng: number} = evento.coords;

    // creamos un Marcador
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);

    // insertamos el Marcador
    this.marcadores.push(nuevoMarcador);
    
    // lo guardamos
    this.guardarStorage();

    // usamos según doc el Snackbar de Angular Material
    this.snackBar.open('Marcador agregado', 'Cerrar', {duration: 3000});
  }

  // creamos un método para BORRAR un marcador del Mapa
  borrarMarcador(i: number) {
    
    this.marcadores.splice(i, 1);

    this.guardarStorage();

    this.snackBar.open('Marcador borrado', 'Cerrar', {duration: 3000});
  }

  // creamos un método para EDITAR un marcador del Mapa
  editarMarcador( marcador: Marcador) {

    // copiamos según documentación de AngularMaterial y lo ajustamos a nuestra app
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      // si el Dialog no viene vacío
      if(!result) {
        return;
      }

      marcador.titulo = result.titulo;
      marcador.desc = result.desc;

      // guardamos
      this.guardarStorage();

      // usamos según doc el Snackbar de Angular Material
    this.snackBar.open('Marcador actualizado', 'Cerrar', {duration: 3000});
      
    });
  }

  // método para guardar los Marcadores creados en el LocalStorage (sólo permite guardar string, entonces usamos el JSON)
  guardarStorage() {
    
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }
}
