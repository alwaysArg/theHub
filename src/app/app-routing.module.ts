import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectorComponent } from './pages/selector/selector.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialesComponent } from './pages/materiales/materiales.component';
import { OusiaPageComponent } from './pages/ousia-page/ousia-page.component';

const routes: Routes = [
  {component: HomeComponent, path: ''},
  {component: SelectorComponent, path: 'selector'},
  {component: MaterialesComponent, path: 'materiales' },
  {component: OusiaPageComponent, path: 'ousia' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
