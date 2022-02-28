import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";
import { HubComponent } from "./hub/hub.component";
import { NotesComponent} from "./notes/notes.component";
import { LoginComponent } from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  { path: 'hub', component: HubComponent},
  { path: 'notes', component: NotesComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  //{ path: 'catalogue/:brand/:id', component: CarDetailComponent},
  { path: '', redirectTo: '/hub', pathMatch: 'full'},
]

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
