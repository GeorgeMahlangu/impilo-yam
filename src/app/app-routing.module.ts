import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ExtremelySevereComponent } from './components/extremely-severe/extremely-severe.component';
import { FaqComponent } from './components/faq/faq.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MildComponent } from './components/mild/mild.component';
import { ModerateComponent } from './components/moderate/moderate.component';
import { NormalComponent } from './components/normal/normal.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { SevereComponent } from './components/severe/severe.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MenuComponent,
    children: [
      // { path: "", component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'benefits', component: BenefitsComponent },
      { path: 'testimonials', component: TestimonialsComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'questionnaire', component: QuestionnaireComponent },
      { path: 'extremely_severe', component: ExtremelySevereComponent },
      { path: 'normal', component: NormalComponent },
      { path: 'mild', component: MildComponent },
      { path: 'moderate', component: ModerateComponent },
      { path: 'severe', component: SevereComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
