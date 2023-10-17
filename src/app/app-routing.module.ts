import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntlComponent } from './intl/intl.component';
import { NigComponent } from './nig/nig.component';
import { TopintlComponent } from './topintl/topintl.component';

const routes: Routes = [
  { path: '', redirectTo: '/nig', pathMatch: 'full' },
  { path: 'intl', component: IntlComponent },
  { path: 'nig', component: NigComponent },
  { path: 'topintl', component: TopintlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
