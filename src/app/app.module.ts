import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "./translate-loader";
import { HeaderComponent } from './components/template/header/header.component';
import { SidebarMenuComponent } from './components/template/sidebar-menu/sidebar-menu.component';
import { HomeComponent } from './components/pages/home/home.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { ConsultationsComponent } from './components/pages/consultations/consultations.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import { AutoScrollDirective } from './directives/auto-scroll.directive';
import { ConsultationFormDialogComponent } from './components/dialogs/consultation-form-dialog/consultation-form-dialog.component';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule
} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ConsultationCustomIntervalComponent } from './components/dialogs/consultation-custom-interval/consultation-custom-interval.component';
import { PepComponent } from './components/pages/pep/pep.component';
import { CompanyComponent } from './components/pages/company/company.component';
import { CpfCnpjFormatPipe } from './pipes/cpf-cnpj-format.pipe';
import {MatExpansionModule} from "@angular/material/expansion";
import { DaysToReadableFormatPipe } from './pipes/days-to-readable-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarMenuComponent,
    HomeComponent,
    NotFoundComponent,
    ConsultationsComponent,
    AutoScrollDirective,
    ConsultationFormDialogComponent,
    ConsultationCustomIntervalComponent,
    PepComponent,
    CompanyComponent,
    CpfCnpjFormatPipe,
    DaysToReadableFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue:
        {
          hasBackdrop: true,
          backdropClass: 'custom-backdrop'
        }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
