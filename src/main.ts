import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './app/material-module';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { CKEditorModule } from 'ckeditor4-angular';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './app/routing-module';
import { APP_BASE_HREF } from '@angular/common';

import {MatExpansionModule} from '@angular/material/expansion';
import {AppComponent} from './app/app-component';

// Importing Custom Components
import {HomepageComponent} from '../src/app/components/home/homepage.component';
import {TemplateComponent} from '../src/app/components/template/template.component';

// Incorporate Custom Services
import {TemplateDatabaseService} from '../src/app/services/template-database.service';

// Default MatFormField appearance to 'fill' as that is the new recommended approach and the
// `legacy` and `standard` appearances are scheduled for deprecation in version 10.
// This makes the examples that use MatFormField render the same in StackBlitz as on the docs site.
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    CKEditorModule,
    MatExpansionModule,
    CommonModule,
    RoutingModule
  ],
  entryComponents: [AppComponent],
  declarations: [AppComponent, HomepageComponent, TemplateComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: APP_BASE_HREF, useValue : '/' },
    TemplateDatabaseService
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */