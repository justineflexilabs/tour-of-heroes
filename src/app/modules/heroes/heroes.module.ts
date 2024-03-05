import { NgModule } from '@angular/core';

import { HeroesComponent } from '@modules/heroes/page/heroes.component';
import { HeroDetailComponent } from '@modules/heroes/page/hero-detail/hero-detail.component';
import { DashboardComponent } from '@modules/heroes/page/dashboard/dashboard.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent, DashboardComponent],
  imports: [SharedModule],
  exports: [HeroesComponent],
  providers: [],
})
export class HeroesModule {}
