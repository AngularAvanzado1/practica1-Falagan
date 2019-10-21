import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UiModule } from '@world-bank/ui';
import { HttpClientModule } from '@angular/common/http';
import { RegionComponent } from './region/region.component';
import { HomeModule } from './home/home.module';
import { RegionModule } from './region/region.module';
import { CountryComponent } from './country/country.component';
import { CountryModule } from './country/country.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule, RouterState, routerReducer } from '@ngrx/router-store';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'region/:code/:name', component: RegionComponent },
  { path: 'country/:id/:name', component: CountryComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    UiModule,
    HttpClientModule,
    HomeModule,
    RegionModule,
    CountryModule,
    StoreModule.forRoot(
      {
        router: routerReducer
      },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
