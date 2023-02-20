import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/UserService/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpassword!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder , private userService:UserService) {}
  
    ngOnInit() {
      this.forgotpassword = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
      });
    }

    onsubmit() {
      if (this.forgotpassword.valid) {
        console.log('onsubmit function called', this.forgotpassword.value);
        let data = {
          email: this.forgotpassword.value.email,
        };
        this.userService.Forgotpassword(data).subscribe((response: any) =>{
          console.log('ForgotPassword Is SuccessFull' , response);
        });

        }
      }
    }


