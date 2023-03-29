import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
    forgotpassword!: FormGroup;
    submitted = false;
  
    constructor(private formBuilder: FormBuilder , private userService: UserService) {}
  
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
        this.userService.forgotpassword(data).subscribe((response: any) => {
          console.log('ForgotPassword Is Successfull', response);
        });
      }
    }

}
