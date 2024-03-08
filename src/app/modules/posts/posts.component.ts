import { Component, Input, signal } from '@angular/core';
import { TokenStorageService } from '../../_services/token-storage.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent {
  user = {
    name: 'John Doe',
    title: 'Software Developer',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.',
    profileImage: 'https://via.placeholder.com/150'
  };
  username?: string; // Initialisez les propriétés ou déclarez-les comme optionnelles en ajoutant ? après leur nom
  email?: string;
  profilePicUrl?: string = "assets/images/user.png";
  roles: string[] = [];
  isLoggedIn = false;
  sideNavCollapsed = signal(false);
  @Input() set isCollapsed(val: boolean){
    this.sideNavCollapsed.set(val)
  }
  constructor(private tokenStorageService: TokenStorageService) {}
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.profilePicUrl = user.profilePicUrl;
      this.username = user.username;
      this.email = user.email

    }
  }
  getProfileImage(): string {
    if (this.profilePicUrl) {
      return this.profilePicUrl;
    } else {
      const firstLetter = this.username ? this.username.charAt(0).toUpperCase() : '';
      const size = this.isCollapsed ? '32' : '100';
      return `https://ui-avatars.com/api/?name=${firstLetter}&background=random&color=fff&size=${size}`;
    }
  }
}
