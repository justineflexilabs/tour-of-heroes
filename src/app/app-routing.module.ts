import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './modules/heroes/page/heroes.component';
import { DashboardComponent } from './modules/heroes/page/dashboard/dashboard.component';
import { HeroDetailComponent } from './modules/heroes/page/hero-detail/hero-detail.component';

/**
 * First, the app-routing.module.ts file imports RouterModule and Routes so the application can
 * have routing capability. The next import, HeroesComponent, gives the Router somewhere to go
 *  once you configure the routes.
 */
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
