import { moduleMetadata } from '@storybook/angular';
import { ReaduserComponent } from './readuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UsersService } from 'src/app/services/users.service';
import { of } from 'rxjs';

const userServiceStub = {
  read: () => of([]),
};

export default {
  title: 'components/ReaduserComponent',
  component: ReaduserComponent,
  decorators: [
    moduleMetadata({
      declarations: [ReaduserComponent],
      imports: [
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
      ],
      providers: [
        { provide: UsersService, useValue: userServiceStub },
      ],
    }),
  ],
};

export const Default = () => ({
  component: ReaduserComponent,
  template: `
    <app-readuser></app-readuser>
  `,
});
