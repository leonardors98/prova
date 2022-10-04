import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaService } from './../../receita.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
})
export class ReceitasComponent implements OnInit {
  constructor(
    public activeRouter: ActivatedRoute,
    public router: Router,
    public fb: FormBuilder,
    public receitaService: ReceitaService
  ) {}
  tempAny: any;

  receitaGroup = this.fb.group({
    nome: ['', [Validators.required]],
    tempoPreparo: [null, [Validators.required]],
    custoAproximado: [null, [Validators.required]],
    ingrediente: [[]],
  });

  ingredienteGroup = this.fb.group({
    nome: ['', Validators.required],
  });

  ngOnInit() {}

  saveIngrediente() {
    this.tempAny = this.receitaGroup.get('ingrediente');
    this.tempAny.value.push(this.ingredienteGroup.value);
    this.ingredienteGroup.reset();
  }

  deleteIngrediente(index) {
    this.tempAny = this.receitaGroup.get('ingrediente');
    this.tempAny.value.splice(index, 1);
  }

  saveReceita() {
    if (this.receitaGroup.valid) {
      console.log(this.receitaGroup.value);
      this.receitaService
        .salvarReceita(this.receitaGroup.value)
        .subscribe(() => {
          this.router.navigate(['/home']);
        });
    }
  }

  getReceita() {
    //pegar  receita pelo id
  }
}
