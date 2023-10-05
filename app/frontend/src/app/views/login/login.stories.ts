// login.stories.ts

import { moduleMetadata } from '@storybook/angular';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

export default {
  title: 'views/LoginComponent',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [AuthService],
    }),
  ],
};

export const Default = () => ({
  component: LoginComponent,
  template: `
    <div class="container">
      <app-login></app-login>
    </div>
  `,
});

