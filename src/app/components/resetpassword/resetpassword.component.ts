import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
    resetpassword!: FormGroup;
    submitted = false;
  
    constructor(private formBuilder: FormBuilder ,  private userService: UserService) {}
  
    ngOnInit() {
      this.resetpassword = this.formBuilder.group({
        password: ['', [Validators.required, Validators.email]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]]

      });
    }
    onsubmit() {
      if (this.resetpassword.valid) {
        console.log('onsubmit function called', this.resetpassword.value);
        let data = {
          password: this.resetpassword.value.email,
          confirmPassword: this.resetpassword.value.password,
        };
        this.userService.resetpassword(data).subscribe((response: any) => {
          console.log('ResetPassword Is Successfull', response);
        });
      }
    }
  }
  

