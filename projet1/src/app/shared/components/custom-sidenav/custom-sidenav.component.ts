import { Component, Input, computed, signal } from '@angular/core';
import { observable } from 'mobx';

export type MenuItem = {
  icon: string;
  label: string;
  route: string;
};

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.scss']
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val)
  }
  @observable menuItems: MenuItem[] = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'home',
      label: 'Home',
      route: 'home'
    },
    {
      icon: 'list',
      label: 'List',
      route: 'list'
    }
  ];
  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100')
  constructor() {}
}
