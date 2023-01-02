import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {
  cursos: string[] = [];
  // cursosService: CursosService;

  // o private no constructor faz com que cursosService seja uma atributo da classe automaticamente
  // sem a necessidade de declarar manualmente
  constructor(private cursosService: CursosService) {
    // this.cursosService = _cursosService;
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

  addCurso(curso: string){
    this.cursosService.addCurso(curso);
  }

}
