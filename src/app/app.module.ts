import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DefaultModule } from './layouts/default/default.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpModule } from './crud/emp/emp.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    DefaultModule,
    FormsModule,
    EmpModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
