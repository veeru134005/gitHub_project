import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'app-signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  user: User = {
    username: '',
    password: '',
    email: '',
    mobile: ''
  };

  onSubmit(data:any){

  }

}
