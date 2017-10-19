import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './navmenu/navmenu.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './shared/banner/banner.component';
import { FeaturesComponent } from './shared/features/features.component';
import { MainComponent } from './shared/main/main.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CSSCarouselComponent } from './carousel/carousel.component';
import { DetalleProductoComponent } from './model/detalleProducto.component';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { IndexComponent } from './index/index.component';
import { SpecialComponent } from './especiales/special.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from '../services/rutas';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Ng2CompleterModule } from "ng2-completer";

@NgModule({
  declarations: [
      AppComponent,
      NavMenuComponent,
      HomeComponent,
      BannerComponent,
      FeaturesComponent,
      MainComponent,
      FooterComponent,
      CSSCarouselComponent,
      DetalleProductoComponent,
      DashBoardComponent,
      SpecialComponent,
      SearchComponent,
      IndexComponent
  ],
  imports: [
      routing,
      BrowserModule,
      FormsModule,
      BsDropdownModule.forRoot(),
      CollapseModule.forRoot(),
      HttpModule,
      Ng2CompleterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
