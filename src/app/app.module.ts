import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpaceModule } from './space/space.module';
import { HttpClientModule } from '@angular/common/http';
import { SpaceImageDirective } from './shared/space-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    SpaceImageDirective
  ],
  imports: [
    BrowserModule,
    SpaceModule,
    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SpaceImageDirective]
})
export class AppModule { }
