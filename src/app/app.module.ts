import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReviewCounterComponent } from './dashboard/review-counter/review-counter.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { SidebarComponent } from './create-template/sidebar/sidebar.component';
import { CustomTemplatesComponent } from './create-template/custom-templates/custom-templates.component';
import { TemplateAComponent } from './create-template/custom-templates/template-a/template-a.component';
import { AddheaderComponent } from './create-template/custom-templates/addheader/addheader.component';
import {DemoMaterialModule} from './materials';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ReviewCounterComponent,
    CreateTemplateComponent,
    SidebarComponent,
    CustomTemplatesComponent,
    TemplateAComponent,
    AddheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
