import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';


interface signupForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
}

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [DefaultLayoutComponent, ReactiveFormsModule, PrimaryInputComponent,  ToastrModule],
  providers: [LoginService],
  templateUrl: './signup.component.html',            
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  
  signupForm!: FormGroup<signupForm>;

  constructor(private router: Router, private loginService: LoginService, private toastService: ToastrService) { 
    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      passwordConfirm: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    if (this.signupForm.value.password != this.signupForm.value.passwordConfirm) {
      this.toastService.error('Passwords do not match');
      return;
    }
    this.loginService.signup(this.signupForm.value.name, this.signupForm.value.email, this.signupForm.value.password).subscribe({
      next: () => this.toastService.success('Login successful'),
      error: () => this.toastService.error('Login failed'),
    });
  }

  navigate() {
    this.router.navigate(['login']);
  }
}
