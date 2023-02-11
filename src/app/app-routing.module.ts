import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CronometroComponent } from './view/game/cronometro/cronometro.component';
import { JogoVelhaComponent } from './view/game/jogo-velha/jogo-velha.component';
import { HelloComponent } from './view/hello/hello.component';
// import { HelloComponent } from './view/hello/hello.component';

const routes: Routes = [
  {path: "", component: HelloComponent},
  { path: "jogo-velha", component: JogoVelhaComponent },
  { path: "cronometro", component: CronometroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
