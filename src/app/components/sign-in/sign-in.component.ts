import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signin!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.signin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  onsubmit() {
    this.submitted = true;

    if (this.signin.valid) {
      console.log('onsubmit function called', this.signin.value);
      let data = {
        email: this.signin.value.email,
        password: this.signin.value.password,
      };
      this.userService.signin(data).subscribe((result: any) => {
        console.log('Signed Is Successfull', result);
        localStorage.setItem('token', result.id);
        this.router.navigateByUrl('/home/notes');
      });
    }
  }
}
