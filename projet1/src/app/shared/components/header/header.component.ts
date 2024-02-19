import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { computed } from 'mobx';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  collapsed: boolean = false;

  toggleCollapsed() {
    this.collapsed = !this.collapsed;
  }

  sidenavWidth = computed(() => this.collapsed ? '65px' : '250px');
  
}
