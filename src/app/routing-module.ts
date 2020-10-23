import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importation of application components
import { SearchResultsComponent } from './components/search-results/search-results.component';

const routes: Routes = [
 { path: '', component: SearchResultsComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
