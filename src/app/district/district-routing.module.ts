import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DistrictPageComponent } from './district-page/district-page.component';

const routes: Routes = [{ path: '', component: DistrictPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DistrictRoutingModule { }
