import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './core/components/header/header';
import { MoviesPage } from './feature/movies/movies-page/movies-page';
import { MoviesModule } from './feature/movies/movies-module';

@NgModule({
  declarations: [App, Header],
  imports: [BrowserModule, AppRoutingModule, MoviesModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
