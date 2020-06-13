

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotificationComponent } from 'src/app/modalDialog/notification/notification.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;
  user_email = "deep.patidar05@gmail.com";
  user_password = "123";

  constructor(private _loginService: LoginService, private _router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this._loginService.logout();
  }

  login() {

    this.submitted = true;

    let reqObj = {
      email: this.user_email,
      password: this.user_password
    }

    let reqqs = '?email=' + this.user_email + '&password=' + this.user_password;

      if (this.user_email==="deep.patidar05@gmail.com" && this.user_password=== "123") {
        this._loginService.loginSuccess();
        localStorage.setItem('userdata', JSON.stringify(this.user_email));
        localStorage.setItem('userId', JSON.stringify(1));
        this._router.navigate(["/user"])
      } else {
        alert('Invalid credentails');
      }
    
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(NotificationComponent, {
      width: '250px',
      data: { messageType: 'failed', message: 'Invalid Credentials' }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

