import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MatFormFieldModule } from "@angular/material";
import { CanActivateUser } from "./services/auth.service";
import { LoginComponent } from "./components/login/login.component";
import {ProductComponent} from "./components/product/product.component";
import {UserComponent} from "./components/user/user.component";
const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "product",
    component: ProductComponent,
  },
  {
    path: "login",
    component: LoginComponent
  },
  
  { path: "user", component: UserComponent },
  { path: "**", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
