import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { TiposComponent } from './components/tipos/tipos.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
    {path:"", component:PrincipalComponent},
    {path:"pokemon",component:CuerpoComponent},
    {path:"tipos", component:TiposComponent },
    {path:"**",component:ErrorComponent}

];
