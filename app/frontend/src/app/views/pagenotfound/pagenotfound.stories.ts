import { moduleMetadata } from '@storybook/angular';
import { PagenotfoundComponent } from './pagenotfound.component';
import { RouterModule } from '@angular/router';

export default {
  title: 'views/PagenotfoundComponent',
  component: PagenotfoundComponent,
  decorators: [
    moduleMetadata({
      declarations: [PagenotfoundComponent],
      imports: [
        RouterModule.forRoot([]),
      ],
    }),
  ],
};

export const Default = () => ({
  component: PagenotfoundComponent,
  template: `
    <div class="not-found-container">
      <h1>Página não encontrada</h1>
      <p>A página que você está procurando não foi encontrada.</p>
      <a routerLink="/">Voltar para a página inicial</a>
    </div>
  `,
});
