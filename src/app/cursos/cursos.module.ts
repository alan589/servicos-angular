import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [
    CursosComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ]
})
export class CursosModule { }
