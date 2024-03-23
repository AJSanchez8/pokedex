import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';

export const routes: Routes = [
    {path:"", component:PrincipalComponent},
    {path:"pokemon",component:CuerpoComponent}

];
