import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FaqComponent } from './components/faq/faq.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NormalComponent } from './components/normal/normal.component';
import { MildComponent } from './components/mild/mild.component';
import { ModerateComponent } from './components/moderate/moderate.component';
import { ExtremelySevereComponent } from './components/extremely-severe/extremely-severe.component';
import { SevereComponent } from './components/severe/severe.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    BenefitsComponent,
    TestimonialsComponent,
    FaqComponent,
    AboutUsComponent,
    ContactUsComponent,
    NormalComponent,
    MildComponent,
    ModerateComponent,
    ExtremelySevereComponent,
    SevereComponent,
    QuestionnaireComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
