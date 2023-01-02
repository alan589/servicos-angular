
import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';
@Injectable()
export class CursosService {
  emitirCursoCriado = new EventEmitter<string>();
  static criouNovoCurso = new EventEmitter<string>();
  cursos: string[] = ['Angular', 'Typescript', 'Javascript'];

  constructor(private logService: LogService){
    console.log('CURSOS SERVICE');
  }
  getCursos(){
    this.logService.consoleLog('Obtendo a lista de cursos...');
    return this.cursos;
  }

  addCurso(curso: string){
    this.logService.consoleLog(`Criando um novo curso: ${curso}`);
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criouNovoCurso.emit(curso);
  }
}
