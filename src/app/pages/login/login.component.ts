import { Component } from '@angular/core';
import { DefaultLayoutComponent } from '../../components/default-layout/default-layout.component';
import { Form, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLayoutComponent, ReactiveFormsModule, PrimaryInputComponent,  ToastrModule],
  providers: [LoginService],
  templateUrl: './login.component.html',            
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  
  loginForm!: FormGroup;

  constructor(private router: Router, private loginService: LoginService, private toastService: ToastrService) { 
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    if (this.loginForm.invalid) {
      console.error('Form is invalid');
      return;
    }
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next: () => this.toastService.success('Login successful'),
      error: () => this.toastService.error('Login failed'),
    });
  }

  navigate() {
    this.router.navigate(['signup']);
  }
}
