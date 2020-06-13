import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { UserComponent } from "./components/user/user.component";

import { FooterComponent } from "./components/footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AgmCoreModule } from '@agm/core';
import { FlexLayoutModule } from '@angular/flex-layout';

// material modules
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatExpansionModule,
  MatMenuModule,
  MatCardModule,
  MatChipsModule,
  MatTableModule,
  MatDividerModule,
  MatRadioModule,
  MatAutocompleteModule
} from "@angular/material";


import { Endpoints } from "./common/endpoints";

import { CanActivateUser } from "./services/auth.service";
import { GroupByPipe } from './pipes/group-by.pipe';
import { NotificationComponent } from './modalDialog/notification/notification.component';
import { SpinnerComponent } from './modalDialog/spinner/spinner.component';
import { LoginComponent } from './components/login/login.component';
import { FilterNamePipe } from "./pipes/filter-name.pipe";
import { FilterNameStartwithPipe } from './pipes/filter-name-startwith.pipe';
import { OrderByPipe } from "./pipes/order-by.pipe";
import { EqualValidator } from "./equal-validator.directive";
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    GroupByPipe,
    FilterNamePipe,
    OrderByPipe,
    NotificationComponent,
    SpinnerComponent,
    LoginComponent,
    FilterNameStartwithPipe,
    EqualValidator,
    ProductComponent,
    UserComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatMenuModule,
    MatCardModule,
    MatChipsModule,
    MatTableModule,
    MatDividerModule,
    MatAutocompleteModule,
    
    MatRadioModule,
    FlexLayoutModule
    
  ],
entryComponents: [],
  providers: [
    // Endpoints
    CanActivateUser
  ],
  exports: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
