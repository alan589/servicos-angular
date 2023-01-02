import { Component, OnInit } from '@angular/core';

import { CursosService } from "../cursos/cursos.service";

@Component({
  selector: 'app-criar-cursos',
  templateUrl: './criar-cursos.component.html',
  styleUrls: ['./criar-cursos.component.css'],
  providers: [CursosService]
})
export class CriarCursosComponent implements OnInit {
  cursos: string[] = [];
  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    CursosService.criouNovoCurso.subscribe(
      novoCurso => this.cursos.push(novoCurso)
    )
  }

}
