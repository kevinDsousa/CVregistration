import { moduleMetadata } from '@storybook/angular';
import { DeletecvComponent } from './deletecv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RouterTestingModule } from '@angular/router/testing';
import { CurriculoService } from 'src/app/services/curriculo.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

export default {
  title: 'components/DeletecvComponent',
  component: DeletecvComponent,
  decorators: [
    moduleMetadata({
      declarations: [DeletecvComponent],
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatNativeDateModule,
        MatSelectModule,
        RouterTestingModule,
        MatSnackBarModule,
      ],
      providers: [CurriculoService],
    }),
  ],
};

export const Default = () => ({
  component: DeletecvComponent,
  template: `
    <app-deletecv></app-deletecv>
  `,
});
