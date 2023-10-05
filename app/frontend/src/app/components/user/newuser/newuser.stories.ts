import { moduleMetadata } from '@storybook/angular';
import { NewuserComponent } from './newuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { of } from 'rxjs';

const userServiceStub = {
  create: (userData: any) => of({}),
  showMessage: (message: string) => {},
};

export default {
  title: 'components/NewuserComponent',
  component: NewuserComponent,
  decorators: [
    moduleMetadata({
      declarations: [NewuserComponent],
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        { provide: UsersService, useValue: userServiceStub },
      ],
    }),
  ],
};

export const Default = () => ({
  component: NewuserComponent,
  template: `
    <app-newuser></app-newuser>
  `,
});
