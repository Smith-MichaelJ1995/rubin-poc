import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importation of application components
import { HomepageComponent } from './components/home/homepage.component';
import { TemplateComponent } from './components/template/template.component';

const routes: Routes = [
 { path: '', component: HomepageComponent },
 { path: 'template', component: TemplateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
