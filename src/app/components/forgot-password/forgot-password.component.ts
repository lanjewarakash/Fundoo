import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpassword!: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) {}
  
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
      }
    }
  
  }


