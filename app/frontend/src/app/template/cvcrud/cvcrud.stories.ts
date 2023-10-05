// cvcrud.stories.ts

import { moduleMetadata } from '@storybook/angular';
import { CvcrudComponent } from './cvcrud.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { NewcvComponent } from 'src/app/components/cv/newcv/newcv.component';

export default {
  title: 'template/CvcrudComponent',
  component: CvcrudComponent,
  decorators: [
    moduleMetadata({
      declarations: [CvcrudComponent],
      imports: [
        MatButtonModule,
        RouterModule.forRoot([
          {
            path: 'readcv/newcv',
            component: NewcvComponent,
          },
        ]),
      ],
    }),
  ],
};

export const Default = () => ({
  component: CvcrudComponent,
  template: `
    <div>
      <h2>Gerenciamento de Currículos</h2>
      <button mat-raised-button color="primary" (click)="navigateToCreateCV()">
        Criar Currículo
      </button>
      <app-readcv></app-readcv>
    </div>
  `,
  props: {
    navigateToCreateCV: () => alert('Navigating to Create CV'), // Mock function for navigation
  },
});
