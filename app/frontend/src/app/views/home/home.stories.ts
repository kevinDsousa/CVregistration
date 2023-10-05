// home.stories.ts

import { moduleMetadata } from '@storybook/angular';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from 'src/app/template/header/header.component';
import { FooterComponent } from 'src/app/template/footer/footer.component';

export default {
  title: 'views/HomeComponent',
  component: HomeComponent,
  decorators: [
    moduleMetadata({
      declarations: [HomeComponent, HeaderComponent, FooterComponent],
      imports: [MatCardModule],
    }),
  ],
};

export const Default = () => ({
  component: HomeComponent,
  template: `
    <app-header></app-header>
    <mat-card class="home mat-elevation-z3">
      <mat-card-title class="title">Bem vindo</mat-card-title>
      <mat-card-subtitle class="subtitle">Cadastro de currículos para vagas</mat-card-subtitle>
    </mat-card>
    <app-footer></app-footer>
  `,
});

