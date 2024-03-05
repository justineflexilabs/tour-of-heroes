import { NgModule } from '@angular/core';

import { HeroesComponent } from './page/heroes.component';
import { HeroDetailComponent } from './page/hero-detail/hero-detail.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent, DashboardComponent],
  imports: [SharedModule],
  exports: [HeroesComponent],
  providers: [],
})
export class HeroesModule {}
