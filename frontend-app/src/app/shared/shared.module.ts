import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoComponent } from './components/logo/logo.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { HeaderComponent } from './components/header/header.component';
import { LanguagePipe } from './pipes/language.pipe';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguageSetupComponent } from './containers/language-setup/language-setup.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormHorizontalComponent } from './components/dynamic-forms/form-horizontal/form-horizontal.component';
import { FormVerticalComponent } from './components/dynamic-forms/form-vertical/form-vertical.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SectionHeaderComponent,
    LogoComponent,
    LanguagePipe,
    LanguageSetupComponent,
    DialogComponent,
    FormHorizontalComponent,
    FormVerticalComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    SectionHeaderComponent,
    LogoComponent,
    LanguagePipe,
    LanguageSetupComponent,
    DialogComponent,
    FormHorizontalComponent,
    FormVerticalComponent,
  ],
})
export class SharedModule {}
