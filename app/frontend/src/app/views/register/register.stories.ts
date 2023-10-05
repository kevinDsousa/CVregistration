import { moduleMetadata } from '@storybook/angular';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

export default {
  title: 'views/RegisterComponent',
  component: RegisterComponent,
  decorators: [
    moduleMetadata({
      declarations: [RegisterComponent],
      imports: [ReactiveFormsModule],
    }),
  ],
};

export const Default = () => ({
  component: RegisterComponent,
  template: `
    <div class="registerform">
      <h2>Novo usuário</h2>
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
        <mat-form-field>
          <mat-label>Name</mat-label>
          <input matInput formControlName="name" autocomplete="current-password">
          <mat-error *ngIf="registerForm.get('name')?.hasError('required')">name é obrigatório</mat-error>
        </mat-form-field>
        <mat-form-field>
          <mat-label>Email</mat-label>
          <input matInput formControlName="email" autocomplete="current-password">
          <mat-error *ngIf="registerForm.get('email')?.hasError('required')">Email é obrigatório</mat-error>
          <mat-error *ngIf="registerForm.get('email')?.hasError('email')">Email inválido</mat-error>
        </mat-form-field>
        <mat-form-field>
          <mat-label>Password</mat-label>
          <input matInput type="password" formControlName="password" autocomplete="current-password">
          <mat-error *ngIf="registerForm.get('password')?.hasError('required')">Password é obrigatório</mat-error>
          <mat-error *ngIf="registerForm.get('password')?.hasError('minlength')">Password deve ter no mínimo 6 caracteres</mat-error>
        </mat-form-field>
        <mat-checkbox formControlName="admin">Admin</mat-checkbox>
        <button type="submit" [disabled]="registerForm.invalid">Acessar</button>
      </form>
      <div class="links">
        <a routerLink="/">Voltar</a>
      </div>
    </div>
  `,
});
