import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ReceitaService } from './../../receita.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  tempAny: any;

  receita: any = [
    {
      id: '1',
      nome: 'teste',
      tempoPreparo: 123,
      custoAproximado: 12.5,
      ingrediente: [
        { nome: 'ingrediente 1' },
        { nome: 'ingrediente 2' },
        { nome: 'ingrediente 3' },
      ],
    },
    {
      id: '2',
      nome: 'asd',
      tempoPreparo: 123,
      custoAproximado: 12.5,
      ingrediente: [{ nome: 'asd 1' }, { nome: 'asd 2' }, { nome: 'asd 3' }],
    },
    {
      id: '3',
      nome: '234zsd',
      tempoPreparo: 123,
      custoAproximado: 12.5,
      ingrediente: [{ nome: 'hjk 1' }, { nome: 'hjk 2' }, { nome: 'hjk 3' }],
    },
  ];

  constructor(public fb: FormBuilder, public receitaService: ReceitaService) {}

  ngOnInit() {
    this.getAllReceita();
  }

  deleteReceita(id, index) {
    this.receitaService.removerReceita(id).subscribe(() => {
      this.tempAny = this.receita.findIndex((obj) => {
        return obj.id == id;
      });
      this.receita.splice(this.tempAny, 1);
    });
  }

  getAllReceita() {
    this.tempAny = this.receita;
    this.tempAny.push(
      this.receitaService.obterTodasReceita().subscribe(() => {})
    );
  }
}
