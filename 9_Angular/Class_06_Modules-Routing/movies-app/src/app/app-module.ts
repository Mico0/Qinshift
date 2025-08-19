import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './core/components/header/header';
import { Home } from './feature/home/home';
import { About } from './feature/about/about';
import { NotFound } from './core/components/not-found/not-found';

@NgModule({
  declarations: [App, Header, Home, About, NotFound],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
