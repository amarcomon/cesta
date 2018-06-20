import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ListaCompraComponent } from './lista-compra/lista-compra.component';
import { DataService } from './data-service';
import { ListasGuardadasComponent } from './listas-guardadas/listas-guardadas.component';
import { HomeComponent } from './home/home.component';
import { KeysPipe } from './pipes/keys.pipe';
import { FilterPipe } from './pipes/filter.pipe';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'lista-compra', component: ListaCompraComponent},
  {path:'mis-listas', component: ListasGuardadasComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaCompraComponent,
    ListasGuardadasComponent,
    HomeComponent,
    KeysPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    HttpModule,
    RouterModule.forRoot(
      routes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
