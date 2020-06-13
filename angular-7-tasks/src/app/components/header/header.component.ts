import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { debug } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;   
  isloggedIn:boolean;   
  constructor(private loginService:LoginService, private _router: Router) { }

  ngOnInit() {

    this.isLoggedIn$ = this.loginService.isLoggedIn;
    this.isLoggedIn$.subscribe( (isLoggedIn) =>{
         this.isloggedIn = isLoggedIn;
    })
    
  }

dashboard() {
    this._router.navigate(["/user"])
  }

logout() {
    localStorage.removeItem('userdata');
    localStorage.removeItem('userId');
    this._router.navigate(["/login"]);
    localStorage.setItem('userId', '');
  }

}
