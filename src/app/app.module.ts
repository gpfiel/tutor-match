import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TutorComponent } from './components/tutor/tutor.component';

import { TutorService } from './services/tutor.service';
import { LoadingService } from './services/loading.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { LoadingComponent } from './components/loading/loading.component';

const appRoutes: Routes = [
  {path:'', component:LandingPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TutorComponent,
    FilterPipe,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    OrderModule
  ],
  providers: [
    TutorService,
    LoadingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
