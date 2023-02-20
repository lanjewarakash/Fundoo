import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/UserService/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  signin!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder , private userService:UserService) {}

  ngOnInit() {
    this.signin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onsubmit() {
    if (this.signin.valid) {
      console.log('onsubmit function called', this.signin.value);
      let data = {
        email: this.signin.value.email,
        password: this.signin.value.password,
      };
      this.userService.signin(data).subscribe((response: any ) => {
        console.log('signed Is  SuccessFull', response)
      })
    }
  }
}
