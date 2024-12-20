import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ConsultationsComponent } from './components/pages/consultations/consultations.component';
import { CompanyComponent } from './components/pages/company/company.component';
import { PepComponent } from './components/pages/pep/pep.component';
import {
  TableSkeletonComponent
} from "./shared/table-skeleton/table-skeleton.component";
import {NoConsultationsComponent} from "./shared/no-consultations/no-consultations.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'consultations',
    component: ConsultationsComponent,
  },
  {
    path: 'consultations/cpf/:id',
    component: PepComponent,
  },
  {
    path: 'consultations/cpf',
    component: PepComponent,
  },
  {
    path: 'consultations/cnpj/:id',
    component: CompanyComponent,
  },
  {
    path: 'consultations/cnpj',
    component: CompanyComponent,
  },
  {
    path: 'test',
    component: NoConsultationsComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
