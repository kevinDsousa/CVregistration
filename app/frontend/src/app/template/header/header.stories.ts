import { moduleMetadata } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

export default {
  title: 'template/HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent],
      imports: [MatToolbarModule],
    }),
  ],
};

export const Default = () => ({
  component: HeaderComponent,
  template: `
    <mat-toolbar class="header mat-elevation-z3">
      <div>
        <span>
          <a href="/">
            <img routerLink="/" class="logo" src="../../../assets/logo.png" alt="logo">
          </a>
          <h2>Cadastro de currículos</h2>
        </span>
        <span [ngClass]="{'hide-element': condition}" class="title-group">
          <a href="/login">
            <i class="material-icons">
              login
            </i>
            Acessar conta
          </a>
        </span>
      </div>
    </mat-toolbar>
  `,
  props: {
    condition: true,
  },
});

