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
  onSubmit() {
    console.log("submit working fine");
    this.router.navigate(['/','dashboard']);
    //this.isLoading = true;
    //this.authService.login(this.username, this.password);
  }

  ngOnDestroy(): void {
    //this.authStatusSubs.unsubscribe();
  }
}
