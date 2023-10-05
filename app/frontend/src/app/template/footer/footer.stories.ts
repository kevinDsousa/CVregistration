// footer.stories.ts

import { moduleMetadata } from '@storybook/angular';
import { FooterComponent } from './footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';

export default {
  title: 'template/FooterComponent',
  component: FooterComponent,
  decorators: [
    moduleMetadata({
      declarations: [FooterComponent],
      imports: [MatToolbarModule],
    }),
  ],
};

export const Default = () => ({
  component: FooterComponent,
  template: `
    <mat-toolbar class="footer">
      <span>
        Desafio Diamond Solutions
      </span>
    </mat-toolbar>
  `,
});

