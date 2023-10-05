import { moduleMetadata } from '@storybook/angular';
import { DeleteuserComponent } from './deleteuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsersModel } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';
import { of } from 'rxjs';

const activatedRouteStub = {
  snapshot: {
    paramMap: {
      get: (key: string) => '1',
    },
  },
};

const userServiceStub = {
  readById: (id: number) => of({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    admin: true,
  } as UsersModel),
  delete: (id: number) => of({}),
  showMessage: (message: string) => {},
};

export default {
  title: 'components/DeleteuserComponent',
  component: DeleteuserComponent,
  decorators: [
    moduleMetadata({
      declarations: [DeleteuserComponent],
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        RouterModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: UsersService, useValue: userServiceStub },
        Router,
      ],
    }),
  ],
};

export const Default = () => ({
  component: DeleteuserComponent,
  template: `
    <app-deleteuser></app-deleteuser>
  `,
});
