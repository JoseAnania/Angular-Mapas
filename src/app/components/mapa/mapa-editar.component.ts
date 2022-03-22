/* Componente creado para manejar la información del botón Editar de un marcador del Mapa */
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mapa-editar',
  templateUrl: './mapa-editar.component.html',
  styleUrls: ['./mapa-editar.component.css']
})
export class MapaEditarComponent implements OnInit {

  // creamos una propiedad del tipo FormGroup
  forma: FormGroup;

  // inyectamos el DIALOG según documentación de AngularMaterial y el FormGroup
  constructor(
    public fb: FormBuilder,
    public dialogRef: MatDialogRef<MapaEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      // cargamos el objeto "forma"
      this.forma = fb.group({
        'titulo': data.titulo,
        'desc': data.desc
      });
  }

  ngOnInit(): void {
  }

  // método para GUARDAR el título y la descripción al Editar un Marcador del Mapa
  guardarCambios() {

    //cerramos el Dialog
    this.dialogRef.close(this.forma.value);
  }

  // método para Cerrar (Cancelar) el DIALOG del Marcador del Mapa (copiado de documentación de AngularMaterial)
  onNoClick(): void {
    this.dialogRef.close();
  }

}
