import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { AboutComponent, AboutHomeComponent, AboutItemComponent } from './about.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    AboutComponent,
    AboutHomeComponent,
    AboutItemComponent,
    HomeComponent,
    AppComponent
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
