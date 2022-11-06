import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  message;
  onSubmit(userName:any,password:any) {
    console.log("submit working fine"+userName +">>>"+password);

    if(userName==undefined || password==undefined || userName=='' || password==''){
      this.message="Please Enter user Details";
    }
    else if((userName=="veera" || userName=="veera@gmail.com") && password=="8500")
    this.router.navigate(['/','dashboard']);
    else{
      this.message="Invalide userName Or Password";
    this.router.navigate(['/','login']);
    }
    //this.isLoading = true;
    //this.authService.login(this.username, this.password);
  }

  ngOnDestroy(): void {
    //this.authStatusSubs.unsubscribe();
  }
}
