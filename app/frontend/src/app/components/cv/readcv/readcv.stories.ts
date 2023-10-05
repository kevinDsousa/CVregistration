import { moduleMetadata } from '@storybook/angular';
import { ReadcvComponent } from './readcv.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatHeaderCell, MatHeaderRow, MatTable } from '@angular/material/table';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'components/ReadcvComponent',
  component: ReadcvComponent,
  decorators: [
    moduleMetadata({
      declarations: [ReadcvComponent],
      imports: [
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        RouterModule.forRoot([]),
        MatCardModule,
        MatSelectModule,
        MatSnackBarModule,
        MatNativeDateModule,
        RouterTestingModule,
      ],
      providers: [MatSort, MatHeaderCell, MatHeaderRow, MatTable, MatSortHeader],
    }),
  ],
};

export const Default = () => ({
  component: ReadcvComponent,
  template: `
    <app-readcv></app-readcv>
  `,
});
