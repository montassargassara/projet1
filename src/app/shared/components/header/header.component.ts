import { BreakpointObserver } from '@angular/cdk/layout';
import {
  Component,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { TokenStorageService } from '../../../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title = 'material-responsive-sidenav';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  isCollapsed = true;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  isSuccessful = false;
  constructor(private tokenStorageService: TokenStorageService,  private router: Router ) { }
  ngOnInit():void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  toggleMenu() {
      this.sidenav.open(); 
      this.isCollapsed = !this.isCollapsed;
  }
  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['/login']); // Navigate to the login page
  }
  showGoTopLink = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Logic to show or hide the moving link based on scroll position
    const threshold = 100; // Number of pixels scrolled down to show the link
    this.showGoTopLink = window.scrollY > threshold;
  }

  goToTop() {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }
}