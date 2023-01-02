import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CursosModule } from './cursos/cursos.module';
import { AppComponent } from './app.component';
// import { CursosService } from './cursos/cursos.service';
import { LogService } from './shared/log.service';

import { CriarCursosComponent } from './criar-cursos/criar-cursos.component';
// import { TesteModule } from './teste/teste.module';

@NgModule({
  declarations: [
    AppComponent,
    CriarCursosComponent
  ],
  imports: [
    BrowserModule,
    CursosModule
    // TesteModule
  ],
  providers: [
    LogService
  ],
  // providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
