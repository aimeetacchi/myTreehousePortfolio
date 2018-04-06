import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { HttpClientModule } from '@angular/common/http';

// Components ===
import { AppComponent } from './app.component';
import { HomePgComponent } from './components/home-pg/home-pg.component';
import { MainComponent } from './components/main/main.component';
import { Err404Component } from './components/err404/err404.component';

// Services =====
import { DataService } from './services/data.service';
// Custom Pipe ----
import { ReversePipe } from './pipes/reverseArr.pipe';
// Routing ========
import { RoutingModule } from './routing/routing.module';
import { BadgesComponent } from './components/badges/badges.component';
import { PointsComponent } from './components/points/points.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomePgComponent,
    Err404Component,
    BadgesComponent,
    PointsComponent,
    HeaderComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    TransferHttpCacheModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
