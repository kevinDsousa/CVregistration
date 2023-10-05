// usercrud.stories.ts

import { moduleMetadata } from '@storybook/angular';
import { UsercrudComponent } from './usercrud.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'template/UsercrudComponent',
  component: UsercrudComponent,
  decorators: [
    moduleMetadata({
      declarations: [UsercrudComponent],
      imports: [
        MatButtonModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
    }),
  ],
};

export const Default = () => ({
  component: UsercrudComponent,
  template: `
    <app-nav></app-nav>
    <div class="crud">
      <h2>Usuários</h2>
      <button class="createbtn" mat-raised-button (click)="navigateToCreateUser()" color="primary">Criar Usuário</button>
      <app-readuser></app-readuser>
    </div>
  `,
});

