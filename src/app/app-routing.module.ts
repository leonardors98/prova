import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { ReceitasComponent } from './view/receitas/receitas.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'receitas', component: ReceitasComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
