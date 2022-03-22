/* Módulo generado para tener las importaciones de Angular Material en un sólo lugar */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // importamos los módulos de Angular Material según documentación (cada elemento trae su propio import)
    MatToolbarModule, // Módulo que permite usar el TOOLBAR
    MatButtonModule, // Módulo que permite usar el BUTTON
    MatProgressBarModule, // Módulo quepermite usar la PROGRESSBAR
    MatCardModule, // Módulo que permite usar CARD
    MatSnackBarModule, // Módulo que permite usar el SNACKBAR
    MatDialogModule, // Módulo que permite usar el DIALOG
    MatInputModule, // Módulo que permite usar el INPUT
  ],
  // exportamos los módulos para permitir usarlos en otros módulos
  exports: [
    MatToolbarModule, // Módulo que permite usar el TOOLBAR
    MatButtonModule, // Módulo que permite usar el BUTTON
    MatProgressBarModule, // Módulo quepermite usar la PROGRESSBAR
    MatCardModule, // Módulo que permite usar CARD
    MatSnackBarModule, // Módulo que permite usar el SNACKBAR
    MatDialogModule, // Módulo que permite usar el DIALOG
    MatInputModule, // Módulo que permite usar el INPUT
  ],
})
export class MaterialModule { }
