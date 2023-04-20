import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubUserComponent } from './github-user/github-user.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes: Routes = [
  { path: '', redirectTo: 'github', pathMatch: 'full' },
  { path: 'home', component: GithubUserComponent },
  { path: 'perfil', component: PerfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
