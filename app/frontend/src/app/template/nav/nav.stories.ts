import { moduleMetadata } from '@storybook/angular';
import { NavComponent } from './nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

export default {
  title: 'template/NavComponent',
  component: NavComponent,
  decorators: [
    moduleMetadata({
      declarations: [NavComponent],
      imports: [
        MatSidenavModule,
        MatListModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),
      ],
    }),
  ],
};

export const Default = () => ({
  component: NavComponent,
  template: `
    <mat-sidenav-container>
      <mat-sidenav class="sidenav mat-elevation-z4" mode="side" opened fixedInViewport="true">
        <mat-nav-list class="linksmenu nav-list">
          <a mat-list-item routerLink="/dashboard">
            <i class="material-icons">
              dashboard
            </i>
            <span>dashboard</span>
          </a>
          <a mat-list-item routerLink="/readcv">
            <i class="material-icons">
              list_alt
            </i>
            <span>curriculos</span>
          </a>
          <a mat-list-item routerLink="/readuser">
            <i class="material-icons">
              person
            </i>
            <span>usuários</span>
          </a>
          <a mat-list-item routerLink="/">
            <i class="material-icons">
              logout
            </i>
            <span>sair</span>
          </a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content class="content">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
});

