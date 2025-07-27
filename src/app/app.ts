import { Component, inject, signal } from '@angular/core';
import {
  Router,
  NavigationEnd,
  ActivatedRouteSnapshot,
  RouterOutlet,
  RouterModule
} from '@angular/router';
import { filter } from 'rxjs';

import { TopBar } from './components/top-bar/top-bar';
import { BottomNav } from './components/bottom-nav/bottom-nav';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, TopBar, BottomNav, CommonModule],
  template: `
    <app-top-bar *ngIf="showNav()" [title]="title()" />
    <router-outlet></router-outlet>
    <app-bottom-nav *ngIf="showNav()" />
  `,
  styleUrls: ['./app.scss']
})
export class App {
  title = signal('Dashboard');
  showNav = signal(true);
  private router = inject(Router);

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        const deepest = this.getDeepestChild(this.router.routerState.snapshot.root);
        const routeTitle = deepest.data?.['title'];
        const showNavFlag = deepest.data?.['showNav'];

        this.title.set(routeTitle ?? '');
        // Show nav by default unless showNavFlag is explicitly false
        this.showNav.set(showNavFlag !== false);
      });
  }

  private getDeepestChild(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
