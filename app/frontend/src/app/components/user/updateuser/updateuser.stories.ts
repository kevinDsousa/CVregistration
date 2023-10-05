import { moduleMetadata } from '@storybook/angular';
import { UpdateuserComponent } from './updateuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

const userServiceStub = {
  readById: (userId: number) => {
    if (userId === 1) {
      return of({
        id: 1,
        name: 'John Doe',
        email: 'johndoe@example.com',
        admin: true,
      });
    } else {
      return of(null);
    }
  },
  update: (userId: number, userData: any) => of({}),
  showMessage: (message: string) => console.log(message),
};

const activatedRouteStub = {
  snapshot: {
    paramMap: {
      get: (param: string) => '1',
    },
  },
};

const routerStub = {
  navigate: (commands: any[]) => console.log('Navigated to:', commands),
};

export default {
  title: 'components/UpdateuserComponent',
  component: UpdateuserComponent,
  decorators: [
    moduleMetadata({
      declarations: [UpdateuserComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
      ],
      providers: [
        { provide: UsersService, useValue: userServiceStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Router, useValue: routerStub },
      ],
    }),
  ],
};

export const Default = () => ({
  component: UpdateuserComponent,
  template: `
    <app-updateuser></app-updateuser>
  `,
});
