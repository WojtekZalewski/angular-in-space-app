import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SpaceModule } from './space/space.module';
import { HttpClientModule } from '@angular/common/http';
import { SpaceImageDirective } from './shared/space-image.directive';
import { AppRoutingModule } from './app-routing.module';
import { BlackHoleComponent } from './black-hole/black-hole.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaceImageDirective,
    BlackHoleComponent
  ],
  imports: [
    BrowserModule,
    SpaceModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SpaceImageDirective]
})
export class AppModule { }
